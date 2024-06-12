import { useCallback } from "react";
import { resultFormat } from "@w2e/utils";
import { useCallsData } from "../useCallData";
import { globalStorage } from "@w2e/actor";
import { PublicSwapChartDayData } from "@w2e/types";

/**
 * get swap public chart data
 * @param {string} id storage canister id
 */
export async function getSwapChartData(id: string) {
  return resultFormat<PublicSwapChartDayData[]>(await (await globalStorage(id)).getChartData()).data;
}

/**
 * use swap public chart data
 * @param {(string | undefined)} id storage canister id
 */
export function useSwapChartData(id: string | undefined) {
  return useCallsData(
    useCallback(async () => {
      if (!id) return undefined;
      return await getSwapChartData(id!);
    }, [id]),
  );
}
