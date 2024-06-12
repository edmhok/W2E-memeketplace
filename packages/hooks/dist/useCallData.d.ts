import type { ApiResult, CallResult, PaginationResult } from "@w2e/types";

export type Call<T> = () => Promise<ApiResult<T>>;
export declare function useCallsData<T>(fn: Call<T>, reload?: number | string | boolean): CallResult<T>;
export declare function useLatestDataCall<T>(fn: Call<T>, reload?: number | string | boolean): CallResult<T>;
export declare function usePaginationAllData<T>(
  callback: (offset: number, limit: number) => Promise<PaginationResult<T> | undefined>,
  limit: number,
  reload?: boolean,
): {
  result: T[];
  loading: boolean;
};
export declare function getPaginationAllData<T>(
  callback: (offset: number, limit: number) => Promise<PaginationResult<T> | undefined>,
  limit: number,
): Promise<T[]>;
// # sourceMappingURL=useCallData.d.ts.map
