var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createBaseActor } from "./BaseActor";
import { HttpAgent } from "@dfinity/agent";
import { IDL } from "@dfinity/candid";
import { ic_host } from "@w2e/constants";
let cachedCanisterIds = {};
export var Connector;
(function (Connector) {
    Connector["ICPSwap"] = "ICPSwap";
    Connector["PLUG"] = "PLUG";
    Connector["STOIC"] = "STOIC";
    Connector["IC"] = "IC";
    Connector["NFID"] = "NFID";
    Connector["INFINITY"] = "INFINITY";
    Connector["ME"] = "ME";
    Connector["STOIC_MNEMONIC"] = "STOIC_MNEMONIC";
})(Connector || (Connector = {}));
export function isICConnector(connector) {
    return (connector === Connector.IC ||
        connector === Connector.STOIC ||
        connector === Connector.NFID);
}
export function isPlugTypeConnector(connector) {
    return connector === Connector.PLUG || connector === Connector.INFINITY;
}
export function isMeConnector(connector) {
    return connector === Connector.ME;
}
export class Actor {
    constructor() {
        this.connector = Connector.ICPSwap;
        this.agent = null;
        this.host = ic_host;
        this.errorCallbacks = [];
        this.log = false;
    }
    setConnector(connector) {
        this.connector = connector;
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, host, idlFactory, identity, agent, actorName, }) {
            let id = canisterId;
            if (!id && actorName)
                id = cachedCanisterIds[actorName];
            if (!id)
                throw new Error("No canister id");
            const _host = host !== null && host !== void 0 ? host : this.host;
            let isRejected = false;
            const serviceClass = idlFactory({ IDL: IDL });
            let actor = null;
            // catch create infinity actor rejected
            let createActorError = null;
            if (!!identity) {
                try {
                    actor = yield window.icConnector.createActor({
                        canisterId: id,
                        interfaceFactory: idlFactory,
                    });
                }
                catch (error) {
                    createActorError = String(error);
                }
            }
            else {
                actor = yield createBaseActor({
                    canisterId: id,
                    interfaceFactory: idlFactory,
                    agent: this.AnonymousAgent(_host),
                    fetchRootKey: _host !== ic_host,
                });
            }
            const _actor = {};
            serviceClass._fields.forEach((ele) => {
                const key = ele[0];
                _actor[key] = (...args) => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b, _c, _d;
                    if (createActorError)
                        return {
                            err: `${createActorError}. Please try reconnecting your wallet and ensure the account inside matches the account displayed on the ICPSwap page.`,
                        };
                    if (isRejected) {
                        return {
                            err: "The agent creation was rejected. Please try reconnecting your wallet and ensure the account inside matches the account displayed on the ICPSwap page.",
                        };
                    }
                    try {
                        if (!actor)
                            return { err: "no actor" };
                        if (this.beforeSubmit) {
                            const checkResult = yield this.beforeSubmit({
                                canisterId: id !== null && id !== void 0 ? id : "",
                                method: key,
                                identity,
                                connector: this.connector,
                            });
                            if (checkResult.success === false) {
                                return { err: checkResult.message };
                            }
                        }
                        const result = actor[key](...args);
                        return yield result;
                    }
                    catch (error) {
                        const _error = String(error);
                        let message = "";
                        if (_error.includes("Reject text:")) {
                            const _message = (_b = (_a = _error.split(`Reject text: `)[1]) === null || _a === void 0 ? void 0 : _a.split(" at")) !== null && _b !== void 0 ? _b : "";
                            message = !!_message ? (_c = _message[0]) === null || _c === void 0 ? void 0 : _c.trim() : _error;
                        }
                        else {
                            const _message = _error.includes(`"Message"`)
                                ? (_d = _error.split(`"Message": `)[1]) === null || _d === void 0 ? void 0 : _d.split('"')
                                : "";
                            message =
                                _error.includes(`"Message"`) && !!_message ? _message[1] : _error;
                        }
                        if (this.log) {
                            console.log("Actor =====================>");
                            console.log("canister: ", id);
                            console.log("method: ", key);
                            console.log("rejected: ", message);
                            console.log("Actor =====================>");
                        }
                        this.errorCallbacks.forEach((call) => {
                            call({ canisterId: id !== null && id !== void 0 ? id : "", method: key, message });
                        });
                        return { err: message };
                    }
                });
            });
            return _actor;
        });
    }
    AnonymousAgent(host) {
        return new HttpAgent({
            host: host !== null && host !== void 0 ? host : this.host,
        });
    }
    createAgent(canisterId, host, identity) {
        return __awaiter(this, void 0, void 0, function* () {
            // connector is plug type
            if (identity === true) {
                if (this.connector === Connector.PLUG) {
                    yield window.ic.plug.createAgent({ whitelist: [canisterId], host });
                    return window.ic.plug.agent;
                }
                else if (this.connector === Connector.INFINITY) {
                    return new HttpAgent({
                        host,
                    });
                }
                else {
                    return window.icConnector.httpAgent;
                }
            }
            return new HttpAgent({
                host: host,
            });
        });
    }
    setAgent(agent) {
        this.agent = agent;
    }
    setHost(host) {
        this.host = host;
    }
    static setActorCanisterIds(canisterIds) {
        cachedCanisterIds = canisterIds;
    }
    onError(callback) {
        this.errorCallbacks.push(callback);
    }
    onSubmit(callback) {
        this.beforeSubmit = callback;
    }
    setLog(log) {
        this.log = log;
    }
}
export const actor = new Actor();
//# sourceMappingURL=actor.js.map