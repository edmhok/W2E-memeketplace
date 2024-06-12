import { PublicSwapChartDayData } from "@w2e/types";
/**
 * get swap public chart data
 * @param {string} id storage canister id
 */
export declare function getSwapChartData(id: string): Promise<PublicSwapChartDayData[]>;
/**
 * use swap public chart data
 * @param {(string | undefined)} id storage canister id
 */
export declare function useSwapChartData(
  id: string | undefined,
): import("@w2e/types").CallResult<PublicSwapChartDayData[]>;
//# sourceMappingURL=globalStorage.d.ts.map
