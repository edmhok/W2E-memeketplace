import { resultFormat } from "@w2e/utils";
import { useCallsData } from "../useCallData";
import { sns_swap } from "@w2e/actor";
import type { GetDerivedStateResponse } from "@w2e/types";
import { useCallback } from "react";

export async function getSNSSwapDerivedState(swap_id: string) {
  return resultFormat<GetDerivedStateResponse>(await (await sns_swap(swap_id)).get_derived_state({})).data;
}

export function useSNSSwapDerivedState(swap_id: string | undefined, reload?: boolean | number) {
  return useCallsData(
    useCallback(async () => {
      if (!swap_id) return undefined;
      return await getSNSSwapDerivedState(swap_id);
    }, [swap_id]),
    reload,
  );
}
