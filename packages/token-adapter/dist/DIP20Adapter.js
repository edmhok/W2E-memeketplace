import { resultFormat } from "@w2e/utils";
import { ResultStatus } from "@w2e/types";
import { dip20, dip20BalanceActor, dip20SupplyActor } from "@w2e/actor";
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

export class DIP20TokenAdapter extends BaseTokenAdapter {
    holders(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            const totalHolder = (yield this.totalHolders({ canisterId })).data;
            if (totalHolder) {
                const _holders = (yield (yield this.actor(canisterId)).getHolders(params.offset, params.limit));
                const holders = _holders.map((holder) => {
                    return {
                        balance: holder[1],
                        account: holder[0].toString(),
                    };
                });
                return {
                    status: ResultStatus.OK,
                    message: "",
                    data: {
                        content: holders,
                        totalElements: Number(totalHolder),
                        limit: Number(params.limit),
                        offset: Number(params.offset),
                    },
                };
            }
            return {
                status: ResultStatus.OK,
                data: {
                    content: [],
                    totalElements: 0,
                    limit: 10,
                    offset: 0,
                },
                message: "",
            };
        });
    }

    totalHolders(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            let tokenInfo = null;
            try {
                tokenInfo = (yield (yield this.actor(canisterId)).getTokenInfo());
                return resultFormat(tokenInfo.holderNumber);
            }
            catch (error) {
                console.error(error);
            }
            return resultFormat(undefined);
        });
    }

    supply(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            try {
                return resultFormat(yield (yield this.actor(canisterId)).totalSupply());
            }
            catch (error) {
                console.error(error);
                return resultFormat(yield (yield dip20SupplyActor(canisterId)).totalSupply());
            }
        });
    }

    balance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            if (params.user.principal) {
                let balance = BigInt(0);
                try {
                    balance = (yield (yield this.actor(canisterId)).balanceOf(params.user.principal));
                }
                catch (error) {
                    console.error(error);
                    balance = (yield (yield dip20BalanceActor(canisterId)).balanceOf(params.user.principal));
                }
                return resultFormat(balance);
            }
            return resultFormat(BigInt(0));
        });
    }

    transfer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            if (!params.to.principal)
                throw Error("no user principal");
            const result = yield (yield this.actor(canisterId, identity)).transfer(params.to.principal, params.amount);
            return resultFormat(result);
        });
    }

    getFee(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            const metadata = yield (yield this.actor(canisterId)).getMetadata();
            return resultFormat(metadata.fee);
        });
    }

    setFee(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            return resultFormat(yield (yield this.actor(canisterId, identity)).setFee(params));
        });
    }

    setFeeTo(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            if (!params.principal)
                throw Error("no principal");
            return resultFormat(yield (yield this.actor(canisterId, identity)).setFeeTo(params.principal));
        });
    }

    transactions(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            let _b; let _c; let _d; let _e; let _f;
            let cap_id = params.capId;
            if (!cap_id) {
                cap_id = (_b = (yield params.getCapRootId(canisterId))) === null || _b === void 0 ? void 0 : _b.toString();
            }
            if (cap_id) {
                if (!params.offset && params.offset !== 0)
                    throw Error("no cap offset");
                if ((_c = params.user) === null || _c === void 0 ? void 0 : _c.principal) {
                    return resultFormat(yield params.getCapUserTransactions(cap_id.toString(), (_d = params.user) === null || _d === void 0 ? void 0 : _d.principal, (_e = params.witness) !== null && _e !== void 0 ? _e : false, params.offset));
                }
                return resultFormat(yield params.getCapTransactions(cap_id.toString(), (_f = params.witness) !== null && _f !== void 0 ? _f : false, params.offset));
            }
            return resultFormat({
                Ok: {
                    content: [],
                    totalElements: BigInt(0),
                    offset: BigInt(0),
                    limit: BigInt(10),
                },
            });
        });
    }

    approve(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params, identity }) {
            // 10 times approve amount to fix dip20 insufficient allowance amount
            // TODO: A better way to fix it
            return resultFormat(yield (yield this.actor(canisterId, identity)).approve(params.spender, params.allowance * BigInt(10)));
        });
    }

    allowance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            if (!params.owner.principal) {
                throw Error("no principal");
            }
            return resultFormat(yield (yield this.actor(canisterId)).allowance(params.owner.principal, params.spender));
        });
    }

    metadata(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            const metadata = (yield (yield this.actor(canisterId)).getMetadata());
            return {
                status: ResultStatus.OK,
                data: {
                    decimals: metadata.decimals,
                    metadata: [],
                    name: metadata.name,
                    symbol: metadata.symbol,
                    logo: metadata.logo,
                    fee: metadata.fee,
                },
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
export const DIP20Adapter = new DIP20TokenAdapter({
    actor: dip20,
});
// # sourceMappingURL=DIP20Adapter.js.map