import { swapPool } from "@w2e/actor";
import { resultFormat } from "@w2e/utils";
import { PoolMetadata } from "@w2e/candid";

export async function getSwapPoolMeta(canisterId: string) {
  const result = await (await swapPool(canisterId)).metadata();
  return resultFormat<PoolMetadata>(result).data;
}
