var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable no-console */
import { useEffect, useMemo, useState } from "react";
import { SubAccount } from "@dfinity/ledger-icp";
import { Principal } from "@dfinity/principal";
import { useSwapPools, getUserUnusedBalance } from "./calls";
import { getTokenBalance } from "../token/index";
const CALL_LIMITED = 20;
let un_deposit_fetch_index = -1;
export function useUserUnDepositBalance(principal, _pools, selectedTokenId, reload) {
    const [loading, setLoading] = useState(false);
    const [balances, setBalances] = useState([]);
    const pools = useMemo(() => {
        if (!selectedTokenId)
            return _pools;
        return _pools === null || _pools === void 0 ? void 0 : _pools.filter((pool) => pool.token0.address === selectedTokenId || pool.token1.address === selectedTokenId);
    }, [_pools, selectedTokenId]);
    useEffect(() => {
        un_deposit_fetch_index++;
    }, [selectedTokenId]);
    const _fetch = (pool, fetch_index) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (!principal)
            return undefined;
        const sub = SubAccount.fromPrincipal(Principal.fromText(principal)).toUint8Array();
        const call = (token) => __awaiter(this, void 0, void 0, function* () {
            let result;
            try {
                if (fetch_index !== un_deposit_fetch_index) {
                    console.log("abort");
                }
                else {
                    const _result = token.standard.includes("DIP20")
                        ? BigInt(0)
                        : yield getTokenBalance({
                            canisterId: token.address,
                            address: pool.canisterId,
                            sub,
                        });
                    result = _result;
                }
            }
            catch (err) {
                console.error(err);
            }
            return result;
        });
        const result = yield Promise.all([call(pool.token0), call(pool.token1)]);
        return Object.assign(Object.assign({}, pool), { type: "unDeposit", balance0: (_a = result[0]) !== null && _a !== void 0 ? _a : BigInt(0), balance1: (_b = result[1]) !== null && _b !== void 0 ? _b : BigInt(0) });
    });
    useEffect(() => {
        const call = (new_index) => __awaiter(this, void 0, void 0, function* () {
            if (!pools)
                return;
            const calls = [[]];
            for (let i = 0; i < pools.length; i++) {
                if (i % CALL_LIMITED === 0 && i !== 0) {
                    calls.push([]);
                }
                const pool = pools[i];
                calls[calls.length - 1].push(() => __awaiter(this, void 0, void 0, function* () { return yield _fetch(pool, new_index); }));
            }
            let allResult = [];
            for (let i = 0; i < calls.length; i++) {
                const _calls = calls[i].map((call) => __awaiter(this, void 0, void 0, function* () { return yield call(); }));
                const result = yield Promise.all(_calls);
                allResult = allResult.concat(result);
            }
            if (new_index === un_deposit_fetch_index) {
                setBalances(allResult);
                setLoading(false);
            }
        });
        if (pools && principal) {
            const new_index = un_deposit_fetch_index;
            setBalances([]);
            setLoading(true);
            call(new_index);
        }
    }, [pools, reload, principal]);
    return useMemo(() => {
        const _balances = !selectedTokenId
            ? balances
            : balances.filter((e) => !!e).map((e) => {
                return Object.assign(Object.assign({}, e), { balance0: e.token0.address === selectedTokenId ? e.balance0 : BigInt(0), balance1: e.token1.address === selectedTokenId ? e.balance1 : BigInt(0) });
            });
        return { loading, balances: _balances };
    }, [loading, balances, selectedTokenId]);
}
let unused_fetch_index = -1;
export function useUserUnUsedBalance(principal, _pools, selectedTokenId, reload) {
    const [loading, setLoading] = useState(false);
    const [balances, setBalances] = useState([]);
    const pools = useMemo(() => {
        if (!selectedTokenId)
            return _pools;
        return _pools === null || _pools === void 0 ? void 0 : _pools.filter((pool) => pool.token0.address === selectedTokenId || pool.token1.address === selectedTokenId);
    }, [_pools, selectedTokenId]);
    const poolIds = useMemo(() => {
        return pools === null || pools === void 0 ? void 0 : pools.map((pool) => pool.canisterId.toString());
    }, [pools]);
    useEffect(() => {
        unused_fetch_index++;
    }, [selectedTokenId]);
    const _fetch = (poolId, fetch_index) => __awaiter(this, void 0, void 0, function* () {
        if (!principal)
            return undefined;
        try {
            if (fetch_index !== unused_fetch_index) {
                console.log("abort");
                return undefined;
            }
            const _result = yield getUserUnusedBalance(poolId, Principal.fromText(principal));
            if (!_result)
                return undefined;
            const pool = pools === null || pools === void 0 ? void 0 : pools.filter((pool) => pool.canisterId.toString() === poolId)[0];
            if (!pool)
                return undefined;
            return Object.assign(Object.assign(Object.assign({}, pool), { type: "unUsed" }), _result);
        }
        catch (err) {
            console.error(err);
        }
        return undefined;
    });
    useEffect(() => {
        const call = (new_index) => __awaiter(this, void 0, void 0, function* () {
            if (!poolIds)
                return;
            const calls = [[]];
            for (let i = 0; i < poolIds.length; i++) {
                if (i % CALL_LIMITED === 0 && i !== 0) {
                    calls.push([]);
                }
                const pool = poolIds[i];
                calls[calls.length - 1].push(() => __awaiter(this, void 0, void 0, function* () { return yield _fetch(pool, new_index); }));
            }
            let allResult = [];
            for (let i = 0; i < calls.length; i++) {
                const _calls = calls[i].map((call) => __awaiter(this, void 0, void 0, function* () { return yield call(); }));
                const result = yield Promise.all(_calls);
                allResult = allResult.concat(result);
            }
            if (new_index === unused_fetch_index) {
                setBalances(allResult);
                setLoading(false);
            }
        });
        if (poolIds && principal) {
            const new_index = unused_fetch_index;
            setBalances([]);
            setLoading(true);
            call(new_index);
        }
    }, [poolIds, reload, principal]);
    return useMemo(() => {
        const _balances = !selectedTokenId
            ? balances
            : balances.filter((e) => !!e).map((e) => {
                return Object.assign(Object.assign({}, e), { balance0: e.token0.address === selectedTokenId ? e.balance0 : BigInt(0), balance1: e.token1.address === selectedTokenId ? e.balance1 : BigInt(0) });
            });
        return { loading, balances: _balances };
    }, [loading, balances, selectedTokenId]);
}
export function useUserSwapPoolBalances(principal, selectedTokenId, reload) {
    const { result: pools } = useSwapPools();
    const { loading: unDepositBalanceLoading, balances: unDepositBalances } = useUserUnDepositBalance(principal, pools, selectedTokenId, reload);
    const { loading: unUsedBalanceLoading, balances: unUsedBalances } = useUserUnUsedBalance(principal, pools, selectedTokenId, reload);
    return useMemo(() => ({
        loading: unUsedBalanceLoading || unDepositBalanceLoading,
        pools,
        balances: unUsedBalances.concat(unDepositBalances).filter((balances) => !!balances),
    }), [pools, unUsedBalanceLoading, unUsedBalances, unDepositBalanceLoading, unDepositBalances]);
}
//# sourceMappingURL=useUserSwapUnusedBalance.js.map