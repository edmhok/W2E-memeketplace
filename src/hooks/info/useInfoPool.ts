import { useInfoPoolStorageIds, useInfoPool } from "@w2e/hooks";

export function usePool(poolId: string | undefined) {
  const { result: storageId } = useInfoPoolStorageIds(poolId);

  return useInfoPool(storageId ? storageId[0] : undefined, poolId);
}
