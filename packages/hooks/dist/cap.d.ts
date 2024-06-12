import type { PaginationResult, TokenTransaction } from "@w2e/types";
import { Principal } from "@dfinity/principal";

export declare function getCapHistorySize(canisterId: string): Promise<bigint>;
export declare function useCapHistorySize(canisterId: string): import("@w2e/types").CallResult<bigint>;
export declare function detailValueFormat(detailValue: any): any;
export declare function detailsFormatter(details: any): {
  [key: string]: any;
};
export declare function getCapTransactions(
  canisterId: string,
  witness: boolean,
  offset: number,
): Promise<{
  totalElements: number;
  offset: number;
  limit: number;
  content: TokenTransaction[];
}>;
export declare function useCapTransactions(
  canisterId: string | undefined,
  witness: boolean,
  offset: number,
): import("@w2e/types").CallResult<PaginationResult<TokenTransaction>>;
export declare function getCapUserTransactions(
  canisterId: string,
  principal: Principal,
  witness: boolean,
  offset: number,
): Promise<{
  totalElements: number;
  offset: number;
  limit: number;
  content: TokenTransaction[];
}>;
export declare function useCapUserTransactions(
  canisterId: string | undefined,
  principal: Principal | undefined,
  witness: boolean,
  offset: number,
): import("@w2e/types").CallResult<PaginationResult<TokenTransaction>>;
export declare function getCapRootId(canisterId: string, witness?: boolean): Promise<Principal>;
export declare function useCapRootId(
  canisterId: string | undefined,
  witness?: boolean,
): import("@w2e/types").CallResult<Principal>;
// # sourceMappingURL=cap.d.ts.map
