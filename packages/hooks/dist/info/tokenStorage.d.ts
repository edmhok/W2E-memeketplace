import {
  PublicTokenChartDayData,
  TokenTransaction,
  PublicTokenPricesData,
  TokenPoolsInfo,
  InfoToken,
} from "@w2e/types";
export declare function getInfoToken(storageId: string, tokenId: string): Promise<InfoToken>;
export declare function useInfoToken(
  storageId: string | undefined,
  tokenId: string | undefined,
): import("@w2e/types").CallResult<InfoToken>;
export declare function getInfoTokenChartData(
  storageId: string,
  tokenId: string,
  offset: number,
  limit: number,
): Promise<PublicTokenChartDayData[]>;
export declare function useInfoTokenChartData(
  storageId: string | undefined,
  tokenId: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PublicTokenChartDayData[]>;
export declare function getInfoTokenTransactions(
  storageId: string,
  tokenId: string,
  offset: number,
  limit: number,
): Promise<TokenTransaction[]>;
export declare function useInfoTokenTransactions(
  storageId: string | undefined,
  tokenId: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<TokenTransaction[]>;
export declare function getInfoTokenPriceChart(
  storageId: string,
  tokenId: string,
  time: number,
  interval: number,
  limit: number,
): Promise<PublicTokenPricesData[]>;
export declare function useInfoTokenPriceChart(
  storageId: string | undefined,
  tokenId: string | undefined,
  time: number | undefined,
  interval: number | undefined,
  limit: number,
): import("@w2e/types").CallResult<PublicTokenPricesData[]>;
export declare function getInfoPoolsOfToken(storageId: string, tokenId: string): Promise<TokenPoolsInfo[]>;
export declare function useInfoPoolsOfToken(
  storageId: string | undefined,
  tokenId: string | undefined,
): import("@w2e/types").CallResult<TokenPoolsInfo[]>;
//# sourceMappingURL=tokenStorage.d.ts.map
