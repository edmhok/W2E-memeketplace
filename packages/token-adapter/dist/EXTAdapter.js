import { resultFormat, availableArgsNull, principalToAccount, isOkSubAccount, isBigIntMemo } from "@w2e/utils";
import { SubAccount } from "@dfinity/ledger-icp";
import { ResultStatus } from "@w2e/types";
import { ext } from "@w2e/actor";
import { BaseTokenAdapter, } from "./BaseTokenAdapter";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export class EXTTokenAdapter extends BaseTokenAdapter {
    holders(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            return resultFormat(yield (yield this.actor(canisterId)).holders({
                offset: [params.offset],
                limit: [params.limit],
            }));
        });
    }

    totalHolders(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            return resultFormat(yield (yield this.actor(canisterId)).totalHolders());
        });
    }

    supply(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            return resultFormat(yield (yield this.actor(canisterId)).supply());
        });
    }

    balance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            if (!params.user.address && !params.user.principal)
                throw Error("no user address or principal");
            let address = "";
            if (params.user.principal) {
                const sub = params.subaccount ? SubAccount.fromBytes(Uint8Array.from(params.subaccount)) : undefined;
                address = principalToAccount(params.user.principal.toString(), isOkSubAccount(sub) ? sub : undefined);
            }
            else if (params.user.address) {
                address = params.user.address;
            }
            return resultFormat(yield (yield this.actor(canisterId)).balance({
                token: params.token,
                user: { address },
            }));
        });
    }

    transfer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            let _b; let _c;
            if (!params.to.address && !params.to.principal)
                throw Error("No to address or principal");
            if (!params.from.address && !params.from.principal)
                throw Error("No from address or principal");
            if (isBigIntMemo(params.memo))
                throw Error("Can't support bigint (memo)");
            const subaccount = params.subaccount ? SubAccount.fromBytes(Uint8Array.from(params.subaccount)) : undefined;
            return resultFormat(yield (yield this.actor(canisterId, identity)).transfer({
                token: (_b = params.token) !== null && _b !== void 0 ? _b : "",
                to: params.to.principal
                    ? params.subaccount
                        ? {
                            address: principalToAccount(params.to.principal.toString(), isOkSubAccount(subaccount) ? subaccount : undefined),
                        }
                        : { address: principalToAccount(params.to.principal.toString()) }
                    : { address: params.to.address },
                from: params.from.principal
                    ? { address: principalToAccount(params.from.principal.toString()) }
                    : { address: params.from.address },
                memo: params.memo ? params.memo : [],
                subaccount: availableArgsNull(undefined),
                nonce: availableArgsNull(params.nonce),
                amount: params.amount,
                notify: (_c = params.notify) !== null && _c !== void 0 ? _c : true,
            }));
        });
    }

    setFee(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            return resultFormat(yield (yield this.actor(canisterId, identity)).setFee(params));
        });
    }

    setFeeTo(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            if (!params.address)
                throw Error("no user address");
            return resultFormat(yield (yield this.actor(canisterId, identity)).setFeeTo({ address: params.address }));
        });
    }

    transactions(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            let _b; let _c; let _d; let _e; let _f; let _g;
            let cap_id = params.capId;
            if (!cap_id) {
                const extensions = yield this.extensions({ canisterId });
                if (extensions.includes("@ext/cap")) {
                    cap_id = (_b = (yield params.getCapRootId(canisterId))) === null || _b === void 0 ? void 0 : _b.toString();
                }
            }
            if (cap_id) {
                if (!params.offset && params.offset !== 0)
                    throw Error("no cap offset");
                if ((_c = params.user) === null || _c === void 0 ? void 0 : _c.principal) {
                    return resultFormat(yield params.getCapUserTransactions(cap_id, (_d = params.user) === null || _d === void 0 ? void 0 : _d.principal, (_e = params.witness) !== null && _e !== void 0 ? _e : false, params.offset));
                }
                return resultFormat(yield params.getCapTransactions(cap_id, (_f = params.witness) !== null && _f !== void 0 ? _f : false, params.offset));
            }
            return resultFormat(yield (yield this.actor(canisterId)).transactions({
                hash: availableArgsNull(params.hash),
                user: availableArgsNull(((_g = params.user) === null || _g === void 0 ? void 0 : _g.address) ? { address: params.user.address } : undefined),
                offset: availableArgsNull(params.offset ? BigInt(params.offset) : null),
                limit: availableArgsNull(params.limit ? BigInt(params.limit) : null),
                index: availableArgsNull(params.index ? BigInt(params.index) : null),
            }));
        });
    }

    approve(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params, identity }) {
            return resultFormat(yield (yield this.actor(canisterId, identity)).approve({
                subaccount: params.subaccount ? [Array.from(params.subaccount)] : [],
                spender: params.spender,
                allowance: BigInt(Number.MAX_VALUE),
            }));
        });
    }

    allowance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            if (!params.owner.address && !params.owner.principal)
                throw Error("no owner address or principal");
            return resultFormat(yield (yield this.actor(canisterId)).allowance({
                owner: params.owner.address ? { address: params.owner.address } : { principal: params.owner.principal },
                subaccount: params.subaccount ? [Array.from(params.subaccount)] : [],
                spender: params.spender,
            }));
        });
    }

    metadata(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            let _b;
            const metadata = (_b = resultFormat(yield (yield this.actor(canisterId)).metadata()).data) === null || _b === void 0 ? void 0 : _b.fungible;
            const logo = resultFormat(yield (yield this.actor(canisterId)).logo()).data;
            const fee = resultFormat(yield (yield this.actor(canisterId)).getFee()).data;
            return {
                status: ResultStatus.OK,
                data: {...metadata, logo,
                    fee},
                message: "",
            };
        });
    }

    setLogo(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params, identity }) {
            return resultFormat(yield (yield this.actor(canisterId, identity)).setLogo(params));
        });
    }

    actualReceivedByTransfer({ amount }) {
        return amount;
    }

    extensions(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            return yield (yield this.actor(canisterId)).extensions();
        });
    }

    getMintingAccount(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, }) {
            return {
                status: ResultStatus.OK,
                data: undefined,
                message: "",
            };
        });
    }
}
export const EXTAdapter = new EXTTokenAdapter({
    actor: ext,
});
// # sourceMappingURL=EXTAdapter.js.map