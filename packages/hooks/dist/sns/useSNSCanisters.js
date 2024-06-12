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
import { sns_root } from "@w2e/actor";
import { useCallback } from "react";
export function getSNSCanisters(root_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_root(root_id)).list_sns_canisters({})).data;
    });
}
export function useSNSCanisters(root_id) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!root_id)
            return undefined;
        return yield getSNSCanisters(root_id);
    }), [root_id]));
}
//# sourceMappingURL=useSNSCanisters.js.map