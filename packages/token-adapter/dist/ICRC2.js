import { resultFormat, availableArgsNull, isBigIntMemo } from "@w2e/utils";
import { ResultStatus } from "@w2e/types";
import { icrc2 } from "@w2e/actor";
import { BaseTokenAdapter, } from "./BaseTokenAdapter";
import { icrc1Adapter } from "./ICRC1";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export class ICRC2Adapter extends BaseTokenAdapter {
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

    supply(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            return resultFormat(yield (yield this.actor(canisterId)).icrc1_total_supply());
        });
    }

    balance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            if (params.user.principal) {
                return yield icrc1Adapter.balance({ canisterId, params });
            }
            return resultFormat(BigInt(0));
        });
    }

    transfer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            if (!params.to.principal)
                throw Error("no user principal address");
            if (isBigIntMemo(params.memo))
                throw Error("Can't support bigint (memo)");
            return yield icrc1Adapter.transfer({
                canisterId,
                identity,
                params,
            });
        });
    }

    getFee(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            return yield icrc1Adapter.getFee({ canisterId });
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

    transactions(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            return yield icrc1Adapter.transactions({ canisterId, params });
        });
    }

    approve(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params, identity }) {
            return resultFormat(yield (yield this.actor(canisterId, identity)).icrc2_approve({
                spender: {
                    owner: params.spender,
                    subaccount: availableArgsNull(params.spenderSub ? params.spenderSub : undefined),
                },
                fee: availableArgsNull(params.fee),
                created_at_time: [],
                amount: params.allowance,
                memo: [],
                expected_allowance: availableArgsNull(params.expected_allowance),
                expires_at: availableArgsNull(params.expires_at),
                from_subaccount: availableArgsNull(params.subaccount ? params.subaccount : undefined),
            }));
        });
    }

    allowance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            if (!params.owner.principal)
                throw Error("no principal");
            const result = yield (yield this.actor(canisterId)).icrc2_allowance({
                spender: {
                    owner: params.spender,
                    subaccount: availableArgsNull(params.spenderSub ? params.spenderSub : undefined),
                },
                account: {
                    owner: params.owner.principal,
                    subaccount: availableArgsNull(params.subaccount ? params.subaccount : undefined),
                },
            });
            return resultFormat(result.allowance);
        });
    }

    metadata(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            return yield icrc1Adapter.metadata({ canisterId });
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
export const icrc2Adapter = new ICRC2Adapter({
    actor: icrc2,
});
// # sourceMappingURL=ICRC2.js.map