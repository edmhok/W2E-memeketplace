import type {
  StakingFarmDepositArgs,
  StakingFarmInfo,
  StakingFarmStakeTransaction,
  StakingFarmDistributeTransaction,
  FarmMetadata,
} from "@w2e/types";
import type { ActorIdentity, PaginationResult } from "@w2e/types";
export declare function getV3UserFarmInfo(canisterId: string, principal: string): Promise<StakingFarmInfo>;
export declare function useV3UserFarmInfo(
  canisterId: string | undefined,
  principal: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<StakingFarmInfo>;
export declare function getFarmUserPositions(
  canisterId: string,
  principal: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<StakingFarmDepositArgs>>;
export declare function useFarmUserPositions(
  canisterId: string | undefined,
  principal: string | undefined,
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<StakingFarmDepositArgs>>;
export declare function useFarmUserAllPositions(
  canisterId: string | undefined,
  user: string | undefined,
  reload?: boolean,
): {
  result: StakingFarmDepositArgs[];
  loading: boolean;
};
export declare function getFarmTVL(canisterId: string): Promise<{
  stakedTokenTVL: number;
  rewardTokenTVL: number;
}>;
export declare function useFarmTVL(
  canisterId: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<{
  stakedTokenTVL: number;
  rewardTokenTVL: number;
}>;
export declare function getFarmUserTVL(canisterId: string, principal: string): Promise<number>;
export declare function useFarmUserTVL(
  canisterId: string | undefined,
  principal: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<number>;
export type V3FarmRewardMeta = {
  secondPerCycle: bigint;
  totalRewardBalance: bigint;
  rewardPerCycle: bigint;
  totalRewardClaimed: bigint;
  totalCycleCount: bigint;
  currentCycleCount: bigint;
  totalReward: bigint;
  totalRewardUnclaimed: bigint;
};
export declare function useV3FarmRewardMeta(
  canisterId: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<V3FarmRewardMeta>;
export declare function getV3UserFarmRewardInfo(canisterId: string, positionIds: bigint[]): Promise<bigint>;
export declare function useV3UserFarmRewardInfo(
  canisterId: string | undefined,
  positionIds: bigint[] | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<bigint>;
export type CreateFarmArgs = {
  rewardToken: {
    address: string;
    standard: string;
  };
  rewardAmount: bigint;
  rewardPool: string;
  pool: string;
  startTime: bigint;
  endTime: bigint;
  secondPerCycle: bigint;
  token0AmountLimit: bigint;
  token1AmountLimit: bigint;
  priceInsideLimit: boolean;
};
export declare function createV3Farm(
  identity: ActorIdentity,
  args: CreateFarmArgs,
): Promise<import("@w2e/types").StatusResult<string>>;
export declare function getV3StakingFarms(
  offset: number,
  limit: number,
  state: string,
): Promise<PaginationResult<StakingFarmInfo>>;
export declare function useV3StakingFarms(
  offset: number,
  limit: number,
  state: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<StakingFarmInfo>>;
export declare function getV3FarmMetadata(canisterId: string): Promise<FarmMetadata>;
export declare function useV3FarmMetadata(
  canisterId: string | undefined,
): import("@w2e/types").CallResult<FarmMetadata>;
export declare function getV3FarmStakeRecords(
  canisterId: string,
  offset: number,
  limit: number,
  from: string,
): Promise<PaginationResult<StakingFarmStakeTransaction>>;
export declare function useV3FarmStakeRecords(
  storageId: string | undefined,
  offset: number,
  limit: number,
  from?: string,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<StakingFarmStakeTransaction>>;
export declare function getV3FarmDistributeRecords(
  canisterId: string,
  offset: number,
  limit: number,
  owner: string,
): Promise<PaginationResult<StakingFarmDistributeTransaction>>;
export declare function useV3FarmDistributeRecords(
  storageId: string | undefined,
  offset: number,
  limit: number,
  owner?: string,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<StakingFarmDistributeTransaction>>;
//# sourceMappingURL=index.d.ts.map
