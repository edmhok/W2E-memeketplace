import { FeeAmount, Token } from "@w2e/swap-sdk";
import { useMemo } from "react";
import { useAllCurrencyCombinations } from "./useAllCurrencyCombinations";
import { PoolState, usePools } from "./usePools";

export function useSwapPools(currencyIn: Token | undefined, currencyOut: Token | undefined) {
  const allCurrencyCombinations = useAllCurrencyCombinations(currencyIn, currencyOut);

  const allCurrencyCombinationsWithAllFees: [Token, Token, FeeAmount][] = useMemo(() => {
    return allCurrencyCombinations.reduce((list, [tokenA, tokenB]) => {
      return list.concat([
        // [tokenA, tokenB, FeeAmount.LOW],
        [tokenA, tokenB, FeeAmount.MEDIUM],
        // [tokenA, tokenB, FeeAmount.HIGH],
      ]);
    }, [] as [Token, Token, FeeAmount][]);
  }, [allCurrencyCombinations]);

  const pools = usePools(allCurrencyCombinationsWithAllFees);

  return useMemo(() => {
    return {
      pools: pools
        .filter((tuple) => {
          return (tuple[0] === PoolState.EXISTS || tuple[0] === PoolState.NOT_CHECK) && tuple[1] !== null;
        })
        .map(([, pool]) => pool),
      loading: pools.some(([state]) => state === PoolState.LOADING),
      checked: !pools.some(([state]) => state === PoolState.NOT_CHECK),
    };
  }, [pools]);
}
