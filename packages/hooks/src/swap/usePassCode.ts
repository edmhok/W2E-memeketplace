import { useCallback } from "react";
import { useCallsData } from "../useCallData";
import { swapFactory } from "@w2e/actor";
import { resultFormat } from "@w2e/utils";
import { Principal } from "@dfinity/principal";
import type { PassCode } from "@w2e/candid";

export async function getPassCode(principal: string) {
  return resultFormat<PassCode[]>(await (await swapFactory()).getPasscodesByPrincipal(Principal.fromText(principal)))
    .data;
}

export function usePassCode(principal: string | undefined, reload?: boolean) {
  return useCallsData(
    useCallback(async () => {
      if (!principal) return undefined;
      return getPassCode(principal);
    }, [principal]),
    reload,
  );
}
