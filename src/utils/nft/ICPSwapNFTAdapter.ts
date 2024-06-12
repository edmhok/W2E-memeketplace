import type { NFTTransferArgs, NFTTransferResult, NFTAllowanceArgs, NFTApproveArgs } from "@w2e/types";
import { resultFormat } from "@w2e/utils";
import { NFTCanister } from "@w2e/actor";
import { Identity } from "types/global";
import { BaseNFTAdapter } from "./BaseNFTAdapter";

export class ICPSwapNFT extends BaseNFTAdapter {
  public async transfer({
    canisterId,
    params,
    identity,
  }: {
    canisterId: string;
    params: NFTTransferArgs;
    identity: Identity;
  }) {
    return resultFormat<NFTTransferResult>(await (await this.actor(canisterId, identity)).transfer(params));
  }

  public async allowance({ params, canisterId }: { canisterId: string; params: NFTAllowanceArgs }) {
    return resultFormat<bigint>(await (await this.actor(canisterId)).allowance(params));
  }

  public async approve({
    params,
    canisterId,
    identity,
  }: {
    identity: Identity;
    canisterId: string;
    params: NFTApproveArgs;
  }) {
    return resultFormat<void>(await (await this.actor(canisterId, identity)).approve(params));
  }
}

export const ICPSwapAdapter = new ICPSwapNFT({
  actor: NFTCanister,
});
