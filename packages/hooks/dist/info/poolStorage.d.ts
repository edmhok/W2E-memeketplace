import { PublicPoolOverView, PublicPoolChartDayData, PoolStorageTransaction } from "@w2e/types";
export declare function getInfoPool(storageId: string, poolId: string): Promise<PublicPoolOverView>;
export declare function useInfoPool(
  storageId: string | undefined,
  poolId: string | undefined,
): import("@w2e/types").CallResult<PublicPoolOverView>;
export declare function getInfoPoolChartData(
  storageId: string,
  poolId: string,
  offset: number,
  limit: number,
): Promise<PublicPoolChartDayData[]>;
export declare function useInfoPoolChartData(
  storageId: string | undefined,
  poolId: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PublicPoolChartDayData[]>;
export declare function getInfoPoolTransactions(
  storageId: string,
  poolId: string,
  offset: number,
  limit: number,
): Promise<PoolStorageTransaction[]>;
export declare function useInfoPoolTransactions(
  storageId: string | undefined,
  poolId: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PoolStorageTransaction[]>;
//# sourceMappingURL=poolStorage.d.ts.map
