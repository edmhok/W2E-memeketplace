import type {
  SwapPoolData,
  TickLiquidityInfo,
  PoolMetadata,
  GetPoolArgs,
  CreatePoolArgs,
  MintArgs,
  UserPositionInfo,
  DecreaseLiquidityArgs,
  IncreaseLiquidityArgs,
  SwapArgs,
  ClaimArgs,
  NFTTokenMetadata,
  UserPositionInfoWithTokenAmount,
  UserPositionInfoWithId,
  PositionInfoWithId,
  TickInfoWithId,
  ActorIdentity,
  PaginationResult,
} from "@w2e/types";
import { Principal } from "@dfinity/principal";

export declare function createSwapPool(
  identity: ActorIdentity,
  args: CreatePoolArgs,
): Promise<import("@w2e/types").StatusResult<SwapPoolData>>;
export declare function getSwapPool(args: GetPoolArgs): Promise<SwapPoolData>;
export declare function useSwapPool(args: GetPoolArgs | undefined): import("@w2e/types").CallResult<SwapPoolData>;
export declare function getSwapPools(): Promise<SwapPoolData[]>;
export declare function useSwapPools(): import("@w2e/types").CallResult<SwapPoolData[]>;
export declare function getSwapPoolMetadata(canisterId: string): Promise<PoolMetadata>;
export declare function useSwapPoolMetadata(
  canisterId: string | undefined,
): import("@w2e/types").CallResult<PoolMetadata>;
export declare function getSwapPoolTicks(
  canisterId: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<TickLiquidityInfo>>;
export declare function getSwapPoolAllTicks(poolId: string, limit?: number): Promise<TickLiquidityInfo[]>;
export declare function useLiquidityTicks(
  canisterId: string | undefined,
  limit?: number,
): import("@w2e/types").CallResult<TickLiquidityInfo[]>;
export declare function deposit(
  identity: ActorIdentity,
  canisterId: string,
  token: string,
  amount: bigint,
  fee: bigint,
): Promise<import("@w2e/types").StatusResult<bigint>>;
export declare function depositFrom(
  identity: ActorIdentity,
  canisterId: string,
  token: string,
  amount: bigint,
  fee: bigint,
): Promise<import("@w2e/types").StatusResult<bigint>>;
export declare function mint(
  canisterId: string,
  identity: ActorIdentity,
  args: MintArgs,
): Promise<import("@w2e/types").StatusResult<bigint>>;
export declare function increaseLiquidity(
  identity: ActorIdentity,
  poolId: string,
  args: IncreaseLiquidityArgs,
): Promise<import("@w2e/types").StatusResult<bigint>>;
export declare function decreaseLiquidity(
  identity: ActorIdentity,
  poolId: string,
  args: DecreaseLiquidityArgs,
): Promise<
  import("@w2e/types").StatusResult<{
    amount0: bigint;
    amount1: bigint;
  }>
>;
export declare function withdraw(
  identity: ActorIdentity,
  poolId: string,
  token: string,
  fee: bigint,
  amount: bigint,
): Promise<import("@w2e/types").StatusResult<bigint>>;
export declare function quote(poolId: string, args: SwapArgs): Promise<bigint>;
export declare function swap(
  poolId: string,
  identity: ActorIdentity,
  args: SwapArgs,
): Promise<import("@w2e/types").StatusResult<bigint>>;
export declare function collect(
  poolId: string,
  identity: ActorIdentity,
  args: ClaimArgs,
): Promise<
  import("@w2e/types").StatusResult<{
    amount0: bigint;
    amount1: bigint;
  }>
>;
export declare function getUserUnusedBalance(
  canisterId: string,
  user: Principal,
): Promise<{
  balance0: bigint;
  balance1: bigint;
}>;
export declare function useUserUnusedBalance(
  canisterId: string | undefined,
  user: Principal | undefined,
): import("@w2e/types").CallResult<{
  balance0: bigint;
  balance1: bigint;
}>;
export declare function getSwapPosition(canisterId: string, tokenId: bigint): Promise<UserPositionInfo>;
export declare function useSwapPosition(
  canisterId: string | undefined,
  positionId: bigint | undefined,
): import("@w2e/types").CallResult<UserPositionInfo>;
export declare function getPositionFee(
  canisterId: string,
  positionId: bigint,
): Promise<{
  tokensOwed0: bigint;
  tokensOwed1: bigint;
}>;
export declare function usePositionFee(
  canisterId: string | undefined,
  positionId: bigint | undefined,
  refresh?: number | boolean,
): import("@w2e/types").CallResult<{
  tokensOwed0: bigint;
  tokensOwed1: bigint;
}>;
export type SwapPoolAllBalance = [
  Principal,
  {
    balance0: bigint;
    balance1: bigint;
  },
];
export declare function getSwapPoolAllBalance(
  canisterId: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<SwapPoolAllBalance>>;
export declare function useSwapPoolAllBalance(
  canisterId: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<SwapPoolAllBalance>>;
export declare function _getSwapPoolAllBalance(poolId: string, limit?: number): Promise<SwapPoolAllBalance[]>;
export declare function _useSwapPoolAllBalance(
  canisterId: string | undefined,
  limit?: number,
): import("@w2e/types").CallResult<SwapPoolAllBalance[]>;
export declare function getUserSwapNFTs(
  principal: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<NFTTokenMetadata>>;
export declare function useUserSwapNFTs(
  principal: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<NFTTokenMetadata>>;
export declare function useUserAllNFTs(principal: string | undefined): {
  result: NFTTokenMetadata[];
  loading: boolean;
};
export declare function getSwapNFTTokenURI(tokenId: bigint | number): Promise<{
  [key: string]: any;
  image: string;
}>;
export declare function useSwapNFTTokenURI(tokenId: bigint | number | undefined): import("@w2e/types").CallResult<{
  [key: string]: any;
  image: string;
}>;
export declare function getPositionNFTId(poolId: string, positionId: string): Promise<number>;
export declare function usePositionNFTId(
  poolId: string | undefined,
  positionId: string | undefined,
): import("@w2e/types").CallResult<number>;
export declare function getSwapUserPositionWithAmount(
  canisterId: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<UserPositionInfoWithTokenAmount>>;
export declare function useSwapUserPositionWithAmount(
  canisterId: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<UserPositionInfoWithTokenAmount>>;
export declare function _getSwapUserPositionsWithAmount(
  poolId: string,
  limit?: number,
): Promise<UserPositionInfoWithTokenAmount[]>;
export declare function _useSwapUserPositionsWithAmount(
  canisterId: string | undefined,
  limit?: number,
): import("@w2e/types").CallResult<UserPositionInfoWithTokenAmount[]>;
export declare function getSwapPositions(
  canisterId: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<UserPositionInfoWithId>>;
export declare function useSwapPositions(
  canisterId: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<UserPositionInfoWithId>>;
export declare function getSwapAllUserPositions(poolId: string, limit?: number): Promise<UserPositionInfoWithId[]>;
export declare function useSwapAllUserPositions(
  canisterId: string | undefined,
  limit?: number,
): import("@w2e/types").CallResult<UserPositionInfoWithId[]>;
export declare function getSwapPoolPositions(
  canisterId: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<PositionInfoWithId>>;
export declare function useSwapPoolPositions(
  canisterId: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<PositionInfoWithId>>;
export declare function getSwapPoolAllPositions(poolId: string, limit?: number): Promise<PositionInfoWithId[]>;
export declare function useSwapPoolAllPositions(
  canisterId: string | undefined,
  limit?: number,
): import("@w2e/types").CallResult<PositionInfoWithId[]>;
export declare function getSwapTicks(
  canisterId: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<TickInfoWithId>>;
export declare function getSwapAllTicks(canisterId: string, limit?: number): Promise<TickInfoWithId[]>;
export declare function useSwapAllTicks(
  canisterId: string | undefined,
  limit?: number,
): import("@w2e/types").CallResult<TickInfoWithId[]>;
export declare function getSwapCyclesInfo(canisterId: string): Promise<{
  balance: bigint;
  available: bigint;
}>;
export declare function useSwapCyclesInfo(canisterId: string | undefined): import("@w2e/types").CallResult<{
  balance: bigint;
  available: bigint;
}>;
export declare function getSwapTokenAmountState(canisterId: string): Promise<{
  swapFee0Repurchase: bigint;
  token0Amount: bigint;
  token1Amount: bigint;
  swapFee1Repurchase: bigint;
}>;
export declare function useSwapTokenAmountState(canisterId: string | undefined): import("@w2e/types").CallResult<{
  swapFee0Repurchase: bigint;
  token0Amount: bigint;
  token1Amount: bigint;
  swapFee1Repurchase: bigint;
}>;
export declare function updateUserPositionPoolId(
  poolId: string,
  identity?: ActorIdentity,
): Promise<import("@w2e/types").StatusResult<undefined>>;
export declare function getUserPositionsPools(account: string): Promise<string[]>;
export declare function useUserPositionPools(
  account: string | undefined | null,
): import("@w2e/types").CallResult<string[]>;
export declare function getSwapUserPositions(poolId: string, principal: string): Promise<UserPositionInfoWithId[]>;
export declare function useSwapUserPositions(
  poolId: string | undefined,
  principal: string | undefined,
): import("@w2e/types").CallResult<UserPositionInfoWithId[]>;
export declare function approvePosition(
  identity: ActorIdentity,
  poolId: string,
  spender: string,
  index: number | bigint,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function getSwapPositionOwner(poolId: string, positionIndex: number | bigint): Promise<string>;
export declare function useSwapPositionOwner(
  poolId: string | undefined,
  positionIndex: number | bigint | undefined,
): import("@w2e/types").CallResult<string>;
// # sourceMappingURL=calls.d.ts.map
