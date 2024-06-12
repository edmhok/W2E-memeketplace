import { useCallback } from "react";
import { isPrincipal, isValidPrincipal } from "@w2e/utils";
import { tokenAdapter } from "@w2e/token-adapter";
import { Principal } from "@dfinity/principal";
import BigNumber from "bignumber.js";
import { useLatestDataCall } from "../useCallData";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function getTokenBalance(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, address, sub, }) {
        const result = yield tokenAdapter.balance({
            canisterId,
            params: {
                user: isPrincipal(address)
                    ? { principal: address }
                    : isValidPrincipal(address)
                        ? {
                            principal: Principal.fromText(address),
                        }
                        : { address },
                token: "",
                subaccount: sub ? [...sub] : undefined,
            },
        });
        return result.data;
    });
}
export function useTokenBalance({ canisterId, address, sub, reload, }) {
    return useLatestDataCall(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!address || !canisterId)
            return undefined;
        const balance = yield getTokenBalance({ canisterId, sub, address });
        return balance === undefined
            ? undefined
            : new BigNumber(balance.toString());
    }), [address, canisterId, sub]), reload);
}
// # sourceMappingURL=useTokenBalance.js.map