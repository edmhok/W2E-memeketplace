export declare function useLimitedInfinityCall<T>(callback: (offset: number, limit: number) => Promise<T[] | undefined>, limit: number, reload?: boolean): {
    result: T[];
    loading: boolean;
};
type Callback<T> = (offset: number, limit: number) => Promise<T[] | undefined>;
export declare function fetch_data<T>(start: number, limit: number, callback: Callback<T>): Promise<T[]>;
/**
 * @description getLimitedInfinityCall
 * @param callback The call to fetch the data
 * @param limit The data length in each call
 * @param call_rounds Number of call
 */
export declare function getLimitedInfinityCall<T>(callback: (offset: number, limit: number) => Promise<T[] | undefined>, limit: number, call_rounds?: number, start_index?: number): Promise<T[]>;
export {};
//# sourceMappingURL=useLimitedInfinityCall.d.ts.map