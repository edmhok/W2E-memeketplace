import { actor } from "@w2e/actor";
import { type ActorIdentity } from "@w2e/types";
import { ckETH_MINTER_ID } from "constants/ckETH";
import { _SERVICE } from "candid/ckETHMinter";
import { idlFactory } from "candid/ckETHMinter.did";

export const ckETHMinter = (identity?: ActorIdentity) =>
  actor.create<_SERVICE>({
    canisterId: ckETH_MINTER_ID,
    identity,
    idlFactory,
  });
