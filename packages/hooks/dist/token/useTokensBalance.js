var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useMemo, useEffect, useState } from "react";
import { getTokenBalance } from "./useTokenBalance";
import { getPromisesAwait } from "../usePromisesAwait";
let GET_TOKENS_BALANCE_INDEX = 0;
export var TokenBalanceState;
(function (TokenBalanceState) {
    TokenBalanceState["LOADING"] = "LOADING";
    TokenBalanceState["VALID"] = "VALID";
    TokenBalanceState["INVALID"] = "INVALID";
})(TokenBalanceState || (TokenBalanceState = {}));
export function useTokensBalance({ tokenIds, address }) {
    const [tokensBalance, setTokensBalance] = useState({});
    const [loadings, setLoadings] = useState({});
    const fetch_token_balance = (tokenId, address, call_index) => __awaiter(this, void 0, void 0, function* () {
        if (call_index !== GET_TOKENS_BALANCE_INDEX) {
            console.log("abort");
            return;
        }
        setLoadings((prevState) => (Object.assign(Object.assign({}, prevState), { [`${tokenId}_${address.toString()}`]: true })));
        const result = yield getTokenBalance({ canisterId: tokenId, address });
        setLoadings((prevState) => (Object.assign(Object.assign({}, prevState), { [`${tokenId}_${address.toString()}`]: false })));
        setTokensBalance((prevState) => (Object.assign(Object.assign({}, prevState), { [`${tokenId}_${address.toString()}`]: result })));
    });
    useEffect(() => {
        function call() {
            return __awaiter(this, void 0, void 0, function* () {
                if (tokenIds && address) {
                    GET_TOKENS_BALANCE_INDEX++;
                    const new_call_index = GET_TOKENS_BALANCE_INDEX;
                    const calls = tokenIds.map((tokenId) => __awaiter(this, void 0, void 0, function* () { return yield fetch_token_balance(tokenId, address, new_call_index); }));
                    yield getPromisesAwait(calls, 10);
                }
            });
        }
        call();
    }, [JSON.stringify(tokenIds), address]);
    return useMemo(() => {
        if (!tokenIds || !address)
            return [];
        return tokenIds.map((tokenId) => {
            if (!tokenId)
                return { state: TokenBalanceState.INVALID, balance: undefined };
            const balance = tokensBalance[`${tokenId}_${address.toString()}`];
            const loading = loadings[`${tokenId}_${address.toString()}`];
            if (loading)
                return { state: TokenBalanceState.LOADING, balance: undefined };
            if (balance === undefined)
                return { state: TokenBalanceState.INVALID, balance: undefined };
            return { state: TokenBalanceState.VALID, balance };
        });
    }, [tokensBalance, loadings, tokenIds, address]);
}
//# sourceMappingURL=useTokensBalance.js.map