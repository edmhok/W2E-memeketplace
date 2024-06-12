import { UserStorageTransaction, PaginationResult } from "@w2e/types";
/**
 * @param storageId The user storage canister id
 * @param principal User's principal address
 * @param offset Start of data
 * @param limit Length of data
 * @param poolIds An array of pool ids, empty array will return all pools data
 * @returns
 */
export declare function getInfoUserTransactions(
  storageId: string,
  principal: string,
  offset: number,
  limit: number,
  poolIds: string[],
): Promise<PaginationResult<UserStorageTransaction>>;
/**
 * @param storageId The user storage canister id
 * @param principal User's principal address
 * @param offset Start of data
 * @param limit Length of data
 * @param poolIds An array of pool ids, empty array will return all pools data
 * @returns
 */
export declare function useInfoUserTransactions(
  storageId: string | undefined,
  principal: string | undefined,
  offset: number,
  limit: number,
  poolIds?: string[],
): import("@w2e/types").CallResult<PaginationResult<UserStorageTransaction>>;
// # sourceMappingURL=userStorage.d.ts.map
