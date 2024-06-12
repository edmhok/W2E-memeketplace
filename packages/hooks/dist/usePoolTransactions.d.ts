import { BaseTransaction } from "@w2e/types";

export declare function usePoolTransactions(
  poolId: string | undefined,
  offset: number,
  limit: number,
  refresh?: number,
): {
  loading: boolean;
  result: BaseTransaction[];
};
// # sourceMappingURL=usePoolTransactions.d.ts.map
