import type { PaginationResult, WrapTransaction } from "@w2e/types";
import { Principal } from "@dfinity/principal";

export declare function getWrapTransactions(
  account: string | undefined | Principal,
  offset: number,
  limit: number,
  index: number | undefined,
): Promise<import("@w2e/candid/dist/token/wicp").Result>;
export declare function useWrapTransactions(
  account: string | undefined | Principal,
  offset: number,
  limit: number,
  index?: number | undefined,
): import("@w2e/types").CallResult<PaginationResult<WrapTransaction>>;
// # sourceMappingURL=index.d.ts.map
