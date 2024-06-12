import { resultFormat } from "@w2e/utils";
import { ckETHMinter } from "actor/ckETH";

export async function withdraw_eth(recipient: string, amount: bigint) {
  return resultFormat<{
    block_index: bigint;
  }>(
    await (
      await ckETHMinter(true)
    ).withdraw_eth({
      recipient,
      amount,
    }),
  );
}
