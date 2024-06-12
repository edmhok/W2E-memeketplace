type Call<T> = Promise<T>;
export declare function getPromisesAwait<T>(calls: Call<T>[], limit?: number): Promise<T[]>;
export declare function usePromisesAwait<T>(calls: Call<T>[] | undefined, limit?: number): {
    loading: boolean;
    result: T[];
};
export {};
//# sourceMappingURL=usePromisesAwait.d.ts.map