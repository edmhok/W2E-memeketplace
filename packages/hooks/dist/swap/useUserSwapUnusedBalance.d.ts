import type { SwapPoolData, UserSwapPoolsBalance } from "@w2e/types";
export declare function useUserUnDepositBalance(
  principal: string,
  _pools: SwapPoolData[] | undefined,
  selectedTokenId?: string,
  reload?: boolean,
): {
  loading: boolean;
  balances: UserSwapPoolsBalance[];
};
export declare function useUserUnUsedBalance(
  principal: string | undefined,
  _pools: SwapPoolData[] | undefined,
  selectedTokenId?: string,
  reload?: boolean,
): {
  loading: boolean;
  balances: UserSwapPoolsBalance[];
};
export declare function useUserSwapPoolBalances(
  principal: string | undefined,
  selectedTokenId?: string,
  reload?: boolean,
): {
  loading: boolean;
  pools: SwapPoolData[];
  balances: UserSwapPoolsBalance[];
};
//# sourceMappingURL=useUserSwapUnusedBalance.d.ts.map
