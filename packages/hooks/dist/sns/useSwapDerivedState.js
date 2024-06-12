var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { resultFormat } from "@w2e/utils";
import { useCallsData } from "../useCallData";
import { sns_swap } from "@w2e/actor";
import { useCallback } from "react";
export function getSNSSwapDerivedState(swap_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_swap(swap_id)).get_derived_state({})).data;
    });
}
export function useSNSSwapDerivedState(swap_id, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!swap_id)
            return undefined;
        return yield getSNSSwapDerivedState(swap_id);
    }), [swap_id]), reload);
}
//# sourceMappingURL=useSwapDerivedState.js.map