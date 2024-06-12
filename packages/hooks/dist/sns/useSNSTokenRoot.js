var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useCallback } from "react";
import { useCallsData } from "../useCallData";
export function useSNSTokensRootIds() {
    const call = () => __awaiter(this, void 0, void 0, function* () {
        const fetch_result = yield fetch("https://sns-api.internetcomputer.org/api/v1/snses?include_swap_lifecycle=LIFECYCLE_PENDING&include_swap_lifecycle=LIFECYCLE_ADOPTED&include_swap_lifecycle=LIFECYCLE_OPEN&include_swap_lifecycle=LIFECYCLE_COMMITTED").catch(() => undefined);
        if (!fetch_result)
            return undefined;
        return (yield fetch_result.json());
    });
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield call();
    }), []));
}
//# sourceMappingURL=useSNSTokenRoot.js.map