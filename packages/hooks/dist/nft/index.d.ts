import { Principal } from "@dfinity/principal";
import type {
  PaginationResult,
  NFTCanisterInfo,
  NFTTokenMetadata,
  TradeStateResult,
  TradeTransaction,
  OrderInfo,
  TotalTradeStat,
  NFTTransaction,
} from "@w2e/types";

export declare function getNFTCanisters(offset: number, limit: number): Promise<PaginationResult<NFTCanisterInfo>>;
export declare function useNFTCanisters(
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<NFTCanisterInfo>>;
export declare function getUserNFTCanisters(
  account: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<NFTCanisterInfo>>;
export declare function useUserNFTCanisters(
  account: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<NFTCanisterInfo>>;
export declare function getV1NFTCanisterMetadata(canisterId: string): Promise<NFTCanisterInfo>;
export declare function useV1NFTCanisterMetadata(
  canisterId: string | undefined,
): import("@w2e/types").CallResult<NFTCanisterInfo>;
export declare function getNFTCanisterMetadata(canisterId: string): Promise<NFTCanisterInfo>;
export declare function useNFTCanisterMetadata(
  canisterId: string | undefined,
): import("@w2e/types").CallResult<NFTCanisterInfo>;
export type NFTTransactionsArgs = {
  canisterId: string;
  tokenIdentifier: string;
  offset: number;
  limit: number;
};
export declare function getNFTTransactions({
  canisterId,
  tokenIdentifier,
  offset,
  limit,
}: NFTTransactionsArgs): Promise<PaginationResult<NFTTransaction>>;
export declare function useNFTTransactions({
  canisterId,
  tokenIdentifier,
  offset,
  limit,
  reload,
}: {
  canisterId?: string;
  tokenIdentifier?: string;
  offset: number;
  limit: number;
  reload?: boolean;
}): import("@w2e/types").CallResult<PaginationResult<NFTTransaction>>;
export declare function getUserNFTs({
  canisterId,
  offset,
  limit,
  account,
}: {
  canisterId: string;
  offset: number;
  limit: number;
  account: string | Principal;
}): Promise<PaginationResult<NFTTokenMetadata>>;
export declare function useUserNFTs({
  canisterId,
  offset,
  limit,
  account,
  reload,
}: {
  canisterId?: string;
  offset: number;
  limit: number;
  account?: string | Principal;
  reload?: boolean;
}): import("@w2e/types").CallResult<PaginationResult<NFTTokenMetadata>>;
export declare function getNFTs({
  canisterId,
  offset,
  limit,
}: {
  canisterId: string;
  offset: number;
  limit: number;
}): Promise<PaginationResult<NFTTokenMetadata>>;
export interface useNFTsArgs {
  canisterId?: string;
  offset: number;
  limit: number;
  reload?: boolean;
}
export declare function useNFTs({
  canisterId,
  offset,
  limit,
  reload,
}: useNFTsArgs): import("@w2e/types").CallResult<PaginationResult<NFTTokenMetadata>>;
export declare function getNFTsStat(offset: number, limit: number): Promise<PaginationResult<TradeStateResult>>;
export declare function useNFTsStat(
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<TradeStateResult>>;
export declare function getNFTStat(canisterId: string): Promise<[bigint, bigint]>;
export declare function useNFTStat(
  canisterId: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<[bigint, bigint]>;
export declare function getV1NFTStat(canisterId: string): Promise<[bigint, bigint]>;
export declare function useV1NFTStat(canisterId: string | undefined): import("@w2e/types").CallResult<[bigint, bigint]>;
export declare function getNFTMetadata(canisterId: string, tokenId: number): Promise<NFTTokenMetadata>;
export declare function useNFTMetadata(
  canisterId: string | undefined,
  tokenId: number | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<NFTTokenMetadata>;
export type NFTTradeTransactionsArgs = {
  canisterId?: string | undefined;
  name?: string;
  tokenIndex?: number | bigint;
  offset: number;
  limit: number;
  sort: string;
  desc: boolean;
  reload?: boolean;
};
export declare function getNFTTradeTransactions({
  canisterId,
  name,
  tokenIndex,
  offset,
  limit,
  sort,
  desc,
}: NFTTradeTransactionsArgs): Promise<PaginationResult<TradeTransaction>>;
export declare function useNFTTradeTransactions({
  canisterId,
  name,
  tokenIndex,
  offset,
  limit,
  sort,
  desc,
  reload,
}: NFTTradeTransactionsArgs): import("@w2e/types").CallResult<PaginationResult<TradeTransaction>>;
export type NFTUserTradeTransactionsArgs = {
  account: string;
  canisterId?: string | undefined;
  name?: string;
  offset: number;
  limit: number;
  sort: string;
  desc: boolean;
  reload?: boolean;
};
export declare function getUserNFTTradeTransactions({
  account,
  canisterId,
  name,
  offset,
  limit,
  sort,
  desc,
}: NFTUserTradeTransactionsArgs): Promise<PaginationResult<TradeTransaction>>;
export declare function useUserNFTTradeTransactions({
  account,
  canisterId,
  name,
  offset,
  limit,
  sort,
  desc,
  reload,
}: NFTUserTradeTransactionsArgs): import("@w2e/types").CallResult<PaginationResult<TradeTransaction>>;
export declare function getTradeOrder(canisterId: string, tokenIndex: number): Promise<OrderInfo>;
export declare function useTradeOrder(
  canisterId: string,
  tokenIndex: number,
  reload?: boolean,
): import("@w2e/types").CallResult<OrderInfo>;
export declare function getNFTTradeData(): Promise<TotalTradeStat>;
export declare function useNFTTradeData(): import("@w2e/types").CallResult<TotalTradeStat>;
// # sourceMappingURL=index.d.ts.map
