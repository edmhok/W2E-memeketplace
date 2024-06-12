import { useMemo } from "react";
import { nearestUsableTick, TickMath, TICK_SPACINGS, FeeAmount } from "@w2e/swap-sdk";
import { Bound } from "@w2e/constants";

export function useTickAtLimit(
  feeAmount: FeeAmount | undefined,
  tickLower: number | undefined,
  tickUpper: number | undefined,
) {
  return useMemo(
    () => ({
      [Bound.LOWER]:
        feeAmount && tickLower
          ? tickLower === nearestUsableTick(TickMath.MIN_TICK, TICK_SPACINGS[feeAmount])
          : undefined,
      [Bound.UPPER]:
        feeAmount && tickUpper
          ? tickUpper === nearestUsableTick(TickMath.MAX_TICK, TICK_SPACINGS[feeAmount])
          : undefined,
    }),
    [feeAmount, tickLower, tickUpper],
  );
}
