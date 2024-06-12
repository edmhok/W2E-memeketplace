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
export function useExtUserNFTs(address, reload) {
    const call = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!address)
            return undefined;
        const result = yield fetch(`https://us-central1-entrepot-api.cloudfunctions.net/api/user/${address}/all`).catch(() => undefined);
        if (!result)
            return undefined;
        return (yield result.json());
    }), [address]);
    return useCallsData(call, reload);
}
//# sourceMappingURL=useUserAllNFTs.js.map