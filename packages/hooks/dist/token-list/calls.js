var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { tokenList, allTokenOfSwap } from "@w2e/actor";
import { useCallback } from "react";
import { resultFormat } from "@w2e/utils";
import { useCallsData } from "../useCallData";
import { getLimitedInfinityCall } from "../useLimitedInfinityCall";
export function getTokensFromList() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenList()).getList()).data;
    });
}
export function useTokensFromList() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getTokensFromList();
    }), []));
}
export function useTokenListTokenInfo(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        const info = resultFormat(yield (yield tokenList()).get(canisterId)).data;
        return info ? info[0] : undefined;
    }), [canisterId]));
}
export function getAllTokensOfSwap(offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield allTokenOfSwap()).get_token_list(BigInt(offset), BigInt(limit), [])).data;
    });
}
export function useAllTokensOfSwap() {
    const call = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
        const result = resultFormat(yield (yield allTokenOfSwap()).get_token_list(BigInt(offset), BigInt(limit), [])).data;
        return result === null || result === void 0 ? void 0 : result.content;
    });
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return getLimitedInfinityCall(call, 1000);
    }), []));
}
//# sourceMappingURL=calls.js.map