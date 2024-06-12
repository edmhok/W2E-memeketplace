var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { resultFormat, availableArgsNull } from "@w2e/utils";
import { useCallsData } from "../useCallData";
import { sns_swap } from "@w2e/actor";
import { useCallback } from "react";
import { Principal } from "@dfinity/principal";
export function getSNSBuyerState(swap_id, principal) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_swap(swap_id)).get_buyer_state({
            principal_id: availableArgsNull(Principal.fromText(principal)),
        })).data;
    });
}
export function useSNSBuyerState(swap_id, principal, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!swap_id || !principal)
            return undefined;
        return yield getSNSBuyerState(swap_id, principal);
    }), [swap_id, principal]), reload);
}
export function refreshSNSBuyerTokens(swap_id, buyer, confirmation_text) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_swap(swap_id, true)).refresh_buyer_tokens({
            buyer,
            confirmation_text: availableArgsNull(confirmation_text),
        })).data;
    });
}
//# sourceMappingURL=useSNSBuyerState.js.map