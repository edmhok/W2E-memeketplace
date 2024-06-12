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
import { passCodeManager } from "@w2e/actor";
import { resultFormat } from "@w2e/utils";
import { Principal } from "@dfinity/principal";
export function usePCMMetadata() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield passCodeManager()).metadata()).data;
    }), []));
}
export function requestPassCode(token0, token1, fee) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (yield passCodeManager(true)).requestPasscode(token0, token1, fee);
        return resultFormat(result);
    });
}
export function withdrawPCMBalance(amount, fee) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (yield passCodeManager(true)).withdraw({ fee, amount });
        return resultFormat(result);
    });
}
export function destroyPassCode(token0, token1, fee) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (yield passCodeManager(true)).destoryPasscode(Principal.fromText(token0), Principal.fromText(token1), fee);
        return resultFormat(result);
    });
}
export function useUserPCMBalance(principal, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!principal)
            return undefined;
        return resultFormat(yield (yield passCodeManager()).balanceOf(principal)).data;
    }), [principal]), reload);
}
//# sourceMappingURL=usePassCodeManager.js.map