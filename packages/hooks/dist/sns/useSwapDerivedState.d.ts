import type { GetDerivedStateResponse } from "@w2e/types";
export declare function getSNSSwapDerivedState(swap_id: string): Promise<GetDerivedStateResponse>;
export declare function useSNSSwapDerivedState(
  swap_id: string | undefined,
  reload?: boolean | number,
): import("@w2e/types").CallResult<GetDerivedStateResponse>;
//# sourceMappingURL=useSwapDerivedState.d.ts.map
