export declare function getExchangeRates(): Promise<import("@w2e/candid/dist/other/ExchangeRate").ExchangeRate__1[]>;
export declare function useExchangeRates(): import("@w2e/types").CallResult<
  import("@w2e/candid/dist/other/ExchangeRate").ExchangeRate__1[]
>;
export declare function getExchangeRate(
  pair: string,
): Promise<import("@w2e/candid/dist/other/ExchangeRate").ExchangeRate__1>;
export declare function useExchangeRate(
  pair: string | undefined,
): import("@w2e/types").CallResult<import("@w2e/candid/dist/other/ExchangeRate").ExchangeRate__1>;
export declare function getXDR2USD(): Promise<string>;
export declare function useXDR2USD(): import("@w2e/types").CallResult<string>;
// # sourceMappingURL=exchange_rate.d.ts.map
