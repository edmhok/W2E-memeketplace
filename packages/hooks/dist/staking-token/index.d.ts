import type {
  CreateTokenPoolArgs,
  StakingTokenPoolInfo,
  StakingPoolControllerPoolInfo,
  StakingPoolTransaction,
  StakingPoolUserInfo,
  StakingPoolCycle,
  StakingPoolGlobalData,
} from "@w2e/types";
import type { ActorIdentity, PaginationResult } from "@w2e/types";
import { Principal } from "@dfinity/principal";
export declare function createStakingTokenPool(
  args: CreateTokenPoolArgs,
  identity: ActorIdentity,
): Promise<import("@w2e/types").StatusResult<string>>;
export declare function getStakingTokenPools(
  state: bigint | undefined,
  offset: number,
  limit: number,
): Promise<PaginationResult<StakingPoolControllerPoolInfo>>;
export declare function useStakingTokenPools(
  state: bigint | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<StakingPoolControllerPoolInfo>>;
export declare function getStakingTokenGlobalData(): Promise<StakingPoolGlobalData>;
export declare function useStakingTokenGlobalData(
  reload?: boolean,
): import("@w2e/types").CallResult<StakingPoolGlobalData>;
export declare function getStakingPoolFromController(canisterId: string): Promise<StakingPoolControllerPoolInfo>;
export declare function useStakingPoolInfoFromController(
  canisterId: string | undefined,
): import("@w2e/types").CallResult<StakingPoolControllerPoolInfo>;
export declare function getStakingTokenPool(canisterId: string): Promise<StakingTokenPoolInfo>;
export declare function useStakingTokenPool(
  canisterId: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<StakingTokenPoolInfo>;
export declare function getStakingTokenUserInfo(
  canisterId: string,
  account: string | Principal,
): Promise<StakingPoolUserInfo>;
export declare function useStakingTokenUserInfo(
  canisterId: string | undefined,
  account: string | Principal | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<StakingPoolUserInfo>;
export declare function getStakingTokenAllUserInfo(
  canisterId: string,
  offset: number,
  limit: number,
): Promise<StakingPoolUserInfo>;
export declare function useStakingTokenAllUserInfo(
  canisterId: string | undefined,
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<StakingPoolUserInfo>;
export declare function getStakingTokenCycles(canisterId: string): Promise<StakingPoolCycle>;
export declare function useStakingTokenCycles(
  canisterId: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<StakingPoolCycle>;
export declare function stakingTokenClaim(
  canisterId: string,
  identity: ActorIdentity,
): Promise<import("@w2e/types").StatusResult<string>>;
export declare function stakingTokenDeposit(
  canisterId: string,
  identity: ActorIdentity,
): Promise<import("@w2e/types").StatusResult<string>>;
export declare function stakingTokenDepositFrom(
  canisterId: string,
  identity: ActorIdentity,
  amount: bigint,
): Promise<import("@w2e/types").StatusResult<string>>;
export declare function stakingTokenHarvest(
  canisterId: string,
  identity: ActorIdentity,
): Promise<import("@w2e/types").StatusResult<bigint>>;
export declare function stakingTokenWithdraw(
  canisterId: string,
  identity: ActorIdentity,
  amount: bigint,
): Promise<import("@w2e/types").StatusResult<string>>;
export declare function getStakingTokenTransactions(
  canisterId: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<StakingPoolTransaction>>;
export declare function useStakingTokenTransactions(
  canisterId: string | undefined,
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<StakingPoolTransaction>>;
export declare function getStakingTokenClaimTransactions(
  canisterId: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<StakingPoolTransaction>>;
export declare function useStakingTokenClaimTransactions(
  canisterId: string | undefined,
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<StakingPoolTransaction>>;
//# sourceMappingURL=index.d.ts.map
