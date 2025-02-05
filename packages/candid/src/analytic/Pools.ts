/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Principal } from "@dfinity/principal";
import type { ActorMethod } from "@dfinity/agent";

export type NatResult = { ok: bigint } | { err: string };
export interface PublicPoolDayData {
  id: bigint;
  low: number;
  feeGrowthGlobal1X128: bigint;
  token0Id: string;
  token1Id: string;
  volumeToken0: number;
  volumeToken1: number;
  sqrtPrice: number;
  high: number;
  close: number;
  open: number;
  pool: string;
  tick: bigint;
  liquidity: bigint;
  token1Price: number;
  volumeUSD: number;
  feesUSD: number;
  feeGrowthGlobal0X128: bigint;
  tvlUSD: number;
  timestamp: bigint;
  txCount: bigint;
  token0Price: number;
}
export interface PublicPoolOverView {
  id: bigint;
  token0Id: string;
  token1Id: string;
  totalVolumeUSD: number;
  sqrtPrice: number;
  tvlToken0: number;
  tvlToken1: number;
  pool: string;
  tick: bigint;
  liquidity: bigint;
  token1Price: number;
  feeTier: bigint;
  volumeUSD: number;
  feesUSD: number;
  feesUSDChange: number;
  token1Standard: string;
  tvlUSD: number;
  volumeUSDWeek: number;
  txCount: bigint;
  token1Decimals: number;
  token0Standard: string;
  token0Symbol: string;
  volumeUSDChange: number;
  tvlUSDChange: number;
  token0Decimals: number;
  token0Price: number;
  token1Symbol: string;
  volumeUSDWeekChange: number;
}
export interface PublicSwapChartDayData {
  id: bigint;
  volumeUSD: number;
  feesUSD: number;
  tvlUSD: number;
  timestamp: bigint;
  txCount: bigint;
}
export type TransactionType =
  | { decreaseLiquidity: null }
  | { claim: null }
  | { swap: null }
  | { addLiquidity: null }
  | { increaseLiquidity: null };
export interface TransactionsType {
  to: string;
  action: TransactionType;
  token0Id: string;
  token1Id: string;
  liquidityTotal: bigint;
  from: string;
  exchangePrice: number;
  hash: string;
  tick: bigint;
  token1Price: number;
  recipient: string;
  token0ChangeAmount: number;
  sender: string;
  exchangeRate: number;
  liquidityChange: bigint;
  token1Standard: string;
  token0Fee: number;
  token1Fee: number;
  timestamp: bigint;
  token1ChangeAmount: number;
  token1Decimals: number;
  token0Standard: string;
  amountUSD: number;
  amountToken0: number;
  amountToken1: number;
  poolFee: bigint;
  token0Symbol: string;
  token0Decimals: number;
  token0Price: number;
  token1Symbol: string;
  poolId: string;
}
export interface _SERVICE {
  cycleAvailable: ActorMethod<[], NatResult>;
  cycleBalance: ActorMethod<[], NatResult>;
  deletePools: ActorMethod<[string], undefined>;
  getAllPools: ActorMethod<[[] | [bigint]], Array<PublicPoolOverView>>;
  getBaseDataStructureCanister: ActorMethod<[], string>;
  getDayDataAllPools: ActorMethod<[[] | [bigint]], Array<PublicPoolDayData>>;
  getLastID: ActorMethod<[bigint], Array<[string, bigint]>>;
  getPool: ActorMethod<[string], PublicPoolOverView>;
  getPoolChartData: ActorMethod<[string, bigint, bigint], Array<PublicSwapChartDayData>>;
  getPoolTransactions: ActorMethod<[string, bigint, bigint], Array<TransactionsType>>;
  getRollIndex: ActorMethod<[], bigint>;
  getStartHeartBeatStatus: ActorMethod<[], boolean>;
  reset: ActorMethod<[], undefined>;
  rollBackData: ActorMethod<[Array<TransactionsType>], undefined>;
  rollBackStatus: ActorMethod<[boolean], undefined>;
  saveTransactions: ActorMethod<[TransactionsType, boolean], undefined>;
}
