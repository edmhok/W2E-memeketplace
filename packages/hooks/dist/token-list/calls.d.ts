import type { TokenListMetadata, AllTokenOfSwapTokenInfo, PaginationResult } from "@w2e/types";

export declare function getTokensFromList(): Promise<TokenListMetadata[]>;
export declare function useTokensFromList(): import("@w2e/types").CallResult<TokenListMetadata[]>;
export declare function useTokenListTokenInfo(
  canisterId: string | undefined | null,
): import("@w2e/types").CallResult<TokenListMetadata>;
export declare function getAllTokensOfSwap(
  offset: number,
  limit: number,
): Promise<PaginationResult<AllTokenOfSwapTokenInfo>>;
export declare function useAllTokensOfSwap(): import("@w2e/types").CallResult<AllTokenOfSwapTokenInfo[]>;
// # sourceMappingURL=calls.d.ts.map
