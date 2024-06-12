import { useCallback } from "react";
import { cap, cap_router } from "@w2e/actor";
import { resultFormat, enumToString } from "@w2e/utils";
import { Principal } from "@dfinity/principal";
import { useCallsData } from "./useCallData";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function getCapHistorySize(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield cap(canisterId)).size();
    });
}
export function useCapHistorySize(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () { return yield getCapHistorySize(canisterId); }), [canisterId]));
}
function SliceFormat(amount) {
    function lebDecode(pipe) {
        let weight = BigInt(1);
        let value = BigInt(0);
        let byte;
        do {
            if (pipe.length < 1) {
                throw new Error("unexpected end of buffer");
            }
            byte = pipe[0];
            pipe = pipe.slice(1);
            value += BigInt(byte & 0x7f).valueOf() * weight;
            weight *= BigInt(128);
        } while (byte >= 0x80);
        return value;
    }
    return amount instanceof Array &&
        !amount.some((value) => typeof value !== "number")
        ? lebDecode(Uint8Array.from(amount))
        : amount;
}
export function detailValueFormat(detailValue) {
    if (detailValue.Principal) {
        return detailValue.Principal.toString();
    }
    if (detailValue.Float) {
        return detailValue.Float;
    }
    if (detailValue.False) {
        return detailValue.False;
    }
    if (detailValue.True) {
        return detailValue.True;
    }
    if (detailValue.I64) {
        return detailValue.I64;
    }
    if (detailValue.U64) {
        return detailValue.U64;
    }
    if (detailValue.TokenIdU64) {
        return String(detailValue.TokenIdU64);
    }
    if (detailValue.Text) {
        return String(detailValue.Text);
    }
    if (detailValue.Slice && detailValue.Slice.length > 0) {
        return SliceFormat(detailValue.Slice);
    }
}
export function detailsFormatter(details) {
    const obj = {};
    details.forEach((detail) => {
        obj[detail[0]] = detailValueFormat(detail[1]);
    });
    return obj;
}
export function getCapTransactions(canisterId, witness, offset) {
    return __awaiter(this, void 0, void 0, function* () {
        const totalElements = yield getCapHistorySize(canisterId);
        const totalPage = parseInt(String(Number(totalElements) / 64)) +
            (Number(totalElements) % 64 === 0 ? 0 : 1);
        const page = parseInt(String(offset / 64)) + 1;
        if (totalPage - page < 0 && totalPage !== 0) {
            return {
                totalElements: Number(totalElements),
                offset,
                limit: 64,
                content: [],
            };
        }
        const result = yield (yield cap(canisterId)).get_transactions({
            page: totalPage === 0 ? [] : [totalPage + 1 - page - 1],
            witness,
        });
        const transactions = result.data.map((_data) => {
            let _a; let _b; let _c; let _d; let _e; let _f; let _g; let _h;
            const details = detailsFormatter(_data.details);
            return {
                timestamp: (_a = details.timestamp) !== null && _a !== void 0 ? _a : _data.time * BigInt(1000000),
                hash: (_b = details.hash) !== null && _b !== void 0 ? _b : "",
                fee: details.fee,
                from_owner: (_d = (_c = details.from) !== null && _c !== void 0 ? _c : _data.caller.toString()) !== null && _d !== void 0 ? _d : "",
                from_account: "",
                from_sub: undefined,
                to_owner: (_e = details.to) !== null && _e !== void 0 ? _e : "",
                to_account: "",
                to_sub: undefined,
                transType: enumToString({ [_data.operation]: null }),
                amount: (_g = (_f = details.value) !== null && _f !== void 0 ? _f : details.amount) !== null && _g !== void 0 ? _g : "",
                index: BigInt(0),
                memo: (_h = details.memo) !== null && _h !== void 0 ? _h : [],
                status: "Complete",
            };
        });
        return {
            totalElements: Number(totalElements),
            offset,
            limit: 64,
            content: transactions.reverse(),
        };
    });
}
export function useCapTransactions(canisterId, witness, offset) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getCapTransactions(canisterId, witness, offset);
    }), [canisterId, offset]), !!canisterId);
}
export function getCapUserTransactions(canisterId, principal, witness, offset) {
    return __awaiter(this, void 0, void 0, function* () {
        const default_result = yield (yield cap(canisterId)).get_user_transactions({
            page: [],
            witness,
            user: principal,
        });
        const totalElements = default_result.page * 64 + default_result.data.length;
        const totalPage = default_result.page + 1;
        const page = parseInt(String(offset / 64)) + 1;
        if (totalPage - page < 0 && totalPage !== 0) {
            return {
                totalElements: Number(totalElements),
                offset,
                limit: 64,
                content: [],
            };
        }
        const result = yield (yield cap(canisterId)).get_user_transactions({
            page: [totalPage === 0 ? 0 : totalPage + 1 - page - 1],
            witness,
            user: principal,
        });
        const transactions = result.data.map((_data) => {
            let _a; let _b; let _c; let _d; let _e; let _f; let _g; let _h; let _j;
            const details = detailsFormatter(_data.details);
            return {
                timestamp: (_a = details.timestamp) !== null && _a !== void 0 ? _a : _data.time * BigInt(1000000),
                hash: (_b = details.hash) !== null && _b !== void 0 ? _b : "",
                fee: (_c = details.fee) !== null && _c !== void 0 ? _c : BigInt(0),
                from_owner: (_e = (_d = details.from) !== null && _d !== void 0 ? _d : _data.caller.toString()) !== null && _e !== void 0 ? _e : "",
                from_account: "",
                from_sub: undefined,
                to_owner: (_f = details.to) !== null && _f !== void 0 ? _f : "",
                to_account: "",
                to_sub: undefined,
                transType: enumToString({ [_data.operation]: null }),
                amount: (_h = (_g = details.value) !== null && _g !== void 0 ? _g : details.amount) !== null && _h !== void 0 ? _h : "",
                index: BigInt(0),
                memo: (_j = details.memo) !== null && _j !== void 0 ? _j : [],
                status: "Complete",
            };
        });
        return {
            totalElements,
            offset,
            limit: 64,
            content: transactions.reverse(),
        };
    });
}
export function useCapUserTransactions(canisterId, principal, witness, offset) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getCapUserTransactions(canisterId, principal, witness, offset);
    }), [canisterId, offset]), !!canisterId && !!principal);
}
export function getCapRootId(canisterId, witness) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = resultFormat(yield (yield cap_router()).get_token_contract_root_bucket({
            canister: Principal.fromText(canisterId),
            witness: witness !== null && witness !== void 0 ? witness : false,
        })).data;
        return (result === null || result === void 0 ? void 0 : result.canister) && (result === null || result === void 0 ? void 0 : result.canister[0])
            ? result === null || result === void 0 ? void 0 : result.canister[0]
            : undefined;
    });
}
export function useCapRootId(canisterId, witness) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getCapRootId(canisterId, witness);
    }), [canisterId, witness]), !!canisterId);
}
// # sourceMappingURL=cap.js.map