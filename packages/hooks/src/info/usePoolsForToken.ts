import { useCallback } from "react";
import { useCallsData } from "../useCallData";
import { node_index } from "@w2e/actor";
import { resultFormat } from "@w2e/utils";
import type { PublicPoolOverView } from "@w2e/candid";

export function usePoolsForToken(canisterId: string | undefined) {
  return useCallsData(
    useCallback(async () => {
      if (!canisterId) return undefined;

      return resultFormat<PublicPoolOverView[]>(await (await node_index()).getPoolsForToken(canisterId)).data;
    }, [canisterId]),
  );
}
