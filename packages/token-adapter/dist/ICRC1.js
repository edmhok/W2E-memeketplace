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
import { ResultStatus } from "@w2e/types";
import { icrc1, icrcArchive } from "@w2e/actor";
import { BaseTokenAdapter, } from "./BaseTokenAdapter";
import { icrcTransactionFormat } from "./utils";
export class ICRC1Adapter extends BaseTokenAdapter {
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
                return resultFormat(yield (yield this.actor(canisterId)).icrc1_balance_of({
                    owner: params.user.principal,
                    subaccount: availableArgsNull(params.subaccount ? params.subaccount : undefined),
                }));
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
            const result = yield (yield this.actor(canisterId, identity)).icrc1_transfer({
                to: {
                    owner: params.to.principal,
                    subaccount: availableArgsNull(params.subaccount ? params.subaccount : undefined),
                },
                memo: availableArgsNull(params.memo),
                amount: params.amount,
                created_at_time: availableArgsNull(params.create_at_time),
                from_subaccount: availableArgsNull(params.from_sub_account ? params.from_sub_account : undefined),
                fee: availableArgsNull(params.fee),
            });
            return resultFormat(result);
        });
    }
    getFee(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            return resultFormat(yield (yield this.actor(canisterId)).icrc1_fee());
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
            if (params.offset === undefined || params.limit === undefined)
                throw Error("no offset or limit");
            // To get the total length
            const init_result = resultFormat(yield (yield this.actor(canisterId)).get_transactions({ start: BigInt(0), length: BigInt(10) })).data;
            if (init_result) {
                const { log_length } = init_result;
                // The start index of the transactions
                let start_index = Number(log_length) - 1 - params.offset - params.limit;
                if (start_index < 0)
                    start_index = 0;
                const _result = resultFormat(yield (yield this.actor(canisterId)).get_transactions({
                    start: BigInt(start_index),
                    length: BigInt(params.limit),
                })).data;
                if (_result) {
                    const { archived_transactions, transactions: token_canister_transactions } = _result;
                    let archivedTransactions = [];
                    if (archived_transactions.length > 0) {
                        archivedTransactions = (yield Promise.all(archived_transactions.map((ele) => __awaiter(this, void 0, void 0, function* () {
                            return (yield (yield icrcArchive(ele.callback[0].toString())).get_transactions({
                                start: ele.start,
                                length: ele.length,
                            })).transactions;
                        }))))
                            .flat()
                            .sort((a, b) => {
                            if (a.timestamp < b.timestamp)
                                return -1;
                            if (a.timestamp > b.timestamp)
                                return 1;
                            return 0;
                        });
                    }
                    const transactions = archivedTransactions
                        .concat(token_canister_transactions)
                        .sort((a, b) => {
                        if (a.timestamp < b.timestamp)
                            return -1;
                        if (a.timestamp > b.timestamp)
                            return 1;
                        return 0;
                    })
                        .map((ele, index) => 
                    // @ts-ignore
                    icrcTransactionFormat(ele, BigInt(start_index) + BigInt(index)));
                    return resultFormat({
                        content: transactions.reverse(),
                        totalElements: log_length,
                        offset: BigInt(params.offset),
                        limit: BigInt(params.limit),
                    });
                }
            }
            return resultFormat(undefined);
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
            const metadata = resultFormat(yield (yield this.actor(canisterId)).icrc1_metadata()).data;
            if (!metadata) {
                return {
                    status: ResultStatus.ERROR,
                    data: undefined,
                    message: "",
                };
            }
            let name = "";
            let symbol = "";
            let decimals = BigInt(0);
            let fee = BigInt(0);
            let logo = "";
            for (let i = 0; i < metadata.length; i++) {
                const ele = metadata[i];
                if (ele[0] === "icrc1:name") {
                    const val = ele[1];
                    name = val.Text;
                }
                else if (ele[0] === "icrc1:symbol") {
                    const val = ele[1];
                    symbol = val.Text;
                }
                else if (ele[0] === "icrc1:decimals") {
                    const val = ele[1];
                    decimals = val.Nat;
                }
                else if (ele[0] === "icrc1:fee") {
                    const val = ele[1];
                    fee = val.Nat;
                }
                else if (ele[0] === "icrc1:logo") {
                    const val = ele[1];
                    logo = val.Text;
                }
            }
            return {
                status: ResultStatus.OK,
                data: {
                    decimals: Number(decimals),
                    name,
                    symbol,
                    fee,
                    logo,
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
            const result = (yield (yield this.actor(canisterId)).icrc1_minting_account())[0];
            return resultFormat(result
                ? { owner: result.owner.toString(), sub: result.subaccount[0] ? [...result.subaccount[0]] : undefined }
                : undefined);
        });
    }
}
export const icrc1Adapter = new ICRC1Adapter({
    actor: icrc1,
});
//# sourceMappingURL=ICRC1.js.map