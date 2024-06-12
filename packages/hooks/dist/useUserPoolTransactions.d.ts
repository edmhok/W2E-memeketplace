import { BaseTransaction } from "@w2e/types";

export declare function useUserPoolTransactions(
  principal: string | undefined,
  poolId: string | undefined,
  offset: number,
  limit: number,
): {
  loading: boolean;
  result: BaseTransaction[];
};
// # sourceMappingURL=useUserPoolTransactions.d.ts.map
