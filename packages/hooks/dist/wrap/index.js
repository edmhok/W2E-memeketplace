import { useCallback } from "react";
import { wrapICP } from "@w2e/actor";
import { resultFormat, availableArgsNull, isPrincipal, isAvailablePageArgs, } from "@w2e/utils";
import { useCallsData } from "../useCallData";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function getWrapTransactions(account, offset, limit, index) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield wrapICP()).wrappedTx({
            user: account
                ? availableArgsNull(isPrincipal(account) ? { principal: account } : { address: account })
                : [],
            offset: availableArgsNull(BigInt(offset)),
            limit: availableArgsNull(BigInt(limit)),
            index: index ? [BigInt(index)] : [],
        });
    });
}
export function useWrapTransactions(account, offset, limit, index) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit))
            return undefined;
        return resultFormat(yield getWrapTransactions(account, offset, limit, index)).data;
    }), [account, index, offset, limit]));
}
// # sourceMappingURL=index.js.map