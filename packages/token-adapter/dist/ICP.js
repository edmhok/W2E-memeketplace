var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { resultFormat, availableArgsNull, isBigIntMemo } from "@w2e/utils";
import { ledgerService } from "@w2e/actor";
import { ResultStatus } from "@w2e/types";
import { BaseTokenAdapter, } from "./BaseTokenAdapter";
import { icrc1Adapter } from "./ICRC1";
export class ICPAdapter extends BaseTokenAdapter {
    holders() {
        return __awaiter(this, void 0, void 0, function* () {
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
    totalHolders() {
        return __awaiter(this, void 0, void 0, function* () {
            return resultFormat(undefined);
        });
    }
    supply() {
        return __awaiter(this, void 0, void 0, function* () {
            return resultFormat(yield (yield this.actor()).icrc1_total_supply());
        });
    }
    balance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ params }) {
            if (params.user.address) {
                return resultFormat((yield (yield this.actor()).account_balance({
                    account: Array.from(Uint8Array.from(Buffer.from(params.user.address, "hex"))),
                })).e8s);
            }
            if (params.user.principal) {
                return resultFormat(yield (yield this.actor()).icrc1_balance_of({
                    owner: params.user.principal,
                    subaccount: availableArgsNull(params.subaccount ? params.subaccount : undefined),
                }));
            }
            return resultFormat(BigInt(0));
        });
    }
    transfer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            var _b;
            if (!params.to.address && !params.to.principal)
                throw Error("No transfer to");
            if (params.to.address) {
                if (params.memo && !isBigIntMemo(params.memo))
                    throw Error("Only bigint support (memo)");
                const result = yield (yield this.actor(canisterId, identity)).transfer({
                    to: Array.from(Uint8Array.from(Buffer.from(params.to.address, "hex"))),
                    memo: (_b = params.memo) !== null && _b !== void 0 ? _b : BigInt(0),
                    amount: { e8s: params.amount },
                    created_at_time: availableArgsNull(params.create_at_time ? { timestamp_nanos: params.create_at_time } : undefined),
                    from_subaccount: availableArgsNull(params.from_sub_account),
                    fee: { e8s: BigInt(10000) },
                });
                return resultFormat(result);
            }
            if (params.to.principal) {
                const result = yield (yield this.actor(canisterId, identity)).icrc1_transfer({
                    to: {
                        owner: params.to.principal,
                        subaccount: availableArgsNull(params.subaccount ? params.subaccount : undefined),
                    },
                    memo: typeof params.memo === "bigint" ? [] : availableArgsNull(params.memo),
                    amount: params.amount,
                    created_at_time: availableArgsNull(params.create_at_time),
                    from_subaccount: availableArgsNull(params.from_sub_account ? params.from_sub_account : undefined),
                    fee: availableArgsNull(null),
                });
                return resultFormat(result);
            }
            return resultFormat(undefined);
        });
    }
    getFee() {
        return __awaiter(this, void 0, void 0, function* () {
            return resultFormat(yield (yield (yield this.actor()).transfer_fee({})).transfer_fee.e8s);
        });
    }
    setFee() {
        return __awaiter(this, void 0, void 0, function* () {
            return resultFormat({ err: "no setFee" });
        });
    }
    setFeeTo() {
        return __awaiter(this, void 0, void 0, function* () {
            return resultFormat({ err: "no setFeeTo" });
        });
    }
    transactions() {
        return __awaiter(this, void 0, void 0, function* () {
            return resultFormat({
                content: [],
                totalElements: BigInt(0),
                offset: BigInt(0),
                limit: BigInt(10),
            });
        });
    }
    approve() {
        return __awaiter(this, void 0, void 0, function* () {
            return resultFormat({ err: "no approve" });
        });
    }
    allowance() {
        return __awaiter(this, void 0, void 0, function* () {
            return resultFormat({ err: "no allowance" });
        });
    }
    metadata(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            const symbol = (yield (yield this.actor(canisterId)).symbol()).symbol;
            const decimals = (yield (yield this.actor()).decimals()).decimals;
            const name = "Internet Computer";
            const fee = resultFormat(yield (yield (yield this.actor()).transfer_fee({})).transfer_fee.e8s).data;
            return {
                status: ResultStatus.OK,
                data: {
                    decimals,
                    metadata: [],
                    name,
                    symbol,
                    fee: fee !== null && fee !== void 0 ? fee : BigInt(1000),
                    logo: "",
                },
                message: "",
            };
        });
    }
    setLogo() {
        return __awaiter(this, void 0, void 0, function* () {
            return resultFormat({ err: "no approve" });
        });
    }
    actualReceivedByTransfer({ amount }) {
        return amount;
    }
    getMintingAccount(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            return yield icrc1Adapter.getMintingAccount({ canisterId });
        });
    }
}
export const icpAdapter = new ICPAdapter({
    // @ts-ignore
    actor: (canisterId, identity) => __awaiter(void 0, void 0, void 0, function* () { return yield ledgerService(identity); }),
});
//# sourceMappingURL=ICP.js.map