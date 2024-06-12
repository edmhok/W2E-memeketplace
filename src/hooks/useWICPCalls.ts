import { useCallback } from "react";
import { WICP } from "actor/index";
import { isAvailablePageArgs, resultFormat } from "@w2e/utils";
import { useCallsData } from "@w2e/hooks";
import { Identity, PaginationResult } from "types/index";
import type { WrapMintArgs, WrapTransaction, WrapWithdrawArgs } from "@w2e/types";

export async function wrapICP(identity: Identity, params: WrapMintArgs) {
  return resultFormat<boolean>(await (await WICP(identity)).mint(params));
}

export async function unwrapICP(identity: Identity, params: WrapWithdrawArgs) {
  return resultFormat<boolean>(await (await WICP(identity)).withdraw(params));
}

export function useUserExchangeRecord(account: string, offset: number, limit: number, reload?: boolean) {
  return useCallsData(
    useCallback(async () => {
      if (!account || !isAvailablePageArgs(offset, limit)) return undefined;

      return resultFormat<PaginationResult<WrapTransaction>>(
        await (
          await WICP()
        ).wrappedTx({
          user: [{ address: account }],
          offset: [BigInt(offset)],
          limit: [BigInt(limit)],
          index: [],
        }),
      ).data;
    }, [account, offset, limit]),
    reload,
  );
}
