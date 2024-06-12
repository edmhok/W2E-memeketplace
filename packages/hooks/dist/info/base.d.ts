import type { PaginationResult, BaseTransaction } from "@w2e/types";
export declare function getBaseStorages(): Promise<string[]>;
export declare function useBaseStorages(): import("@w2e/types").CallResult<string[]>;
export declare function getBaseStorage(): Promise<string>;
export declare function useBaseStorage(): import("@w2e/types").CallResult<string>;
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param poolIds An array of pool ids, empty array will return all pools data
 * @returns
 */
export declare function getBaseTransactions(
  canisterId: string,
  offset: number,
  limit: number,
  poolIds: string[],
): Promise<PaginationResult<BaseTransaction>>;
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param poolIds An array of pool ids, empty array will return all pools data, default is empty
 * @returns
 */
export declare function useBaseTransactions(
  canisterId: string | undefined,
  offset: number,
  limit: number,
  poolIds?: string[] | undefined,
): import("@w2e/types").CallResult<PaginationResult<BaseTransaction>>;
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param tokenId The token canister id
 * @returns
 */
export declare function getTransactionsByToken(
  canisterId: string,
  offset: number,
  limit: number,
  tokenId: string,
): Promise<PaginationResult<BaseTransaction>>;
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param tokenId The token canister id
 * @returns
 */
export declare function useTransactionsByToken(
  canisterId: string | undefined,
  offset: number,
  limit: number,
  tokenId: string,
): import("@w2e/types").CallResult<PaginationResult<BaseTransaction>>;
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param tokenId The pool canister id
 * @returns
 */
export declare function getTransactionsByPool(
  canisterId: string,
  offset: number,
  limit: number,
  poolId: string,
): Promise<PaginationResult<BaseTransaction>>;
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param tokenId The pool canister id
 * @returns
 */
export declare function useTransactionsByPool(
  canisterId: string | undefined,
  offset: number,
  limit: number,
  poolId: string,
): import("@w2e/types").CallResult<PaginationResult<BaseTransaction>>;
//# sourceMappingURL=base.d.ts.map
