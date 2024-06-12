import { Principal } from "@dfinity/principal";
import { resultFormat } from "@w2e/utils";
import { swapPool } from "@w2e/actor";
import { useCallsData } from "@w2e/hooks";
import { useCallback } from "react";

export async function getUserPositionIds(canisterId: string, principal: string) {
  return resultFormat<Array<bigint>>(
    await (await swapPool(canisterId)).getUserPositionIdsByPrincipal(Principal.fromText(principal)),
  ).data;
}

export function useUserPositionIds(canisterId: string | undefined, principal: string | undefined) {
  return useCallsData(
    useCallback(async () => {
      if (!canisterId || !principal) return undefined;
      return await getUserPositionIds(canisterId, principal);
    }, [canisterId, principal]),
  );
}
