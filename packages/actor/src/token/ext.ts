import { ActorIdentity } from "@w2e/types";
import { WrapICP, WrapICPInterfaceFactory, EXTToken, EXTTokenInterfaceFactory } from "@w2e/candid";
import { actor } from "../actor";
import { ActorName } from "../ActorName";

export const ext = (canisterId: string, identity?: ActorIdentity) =>
  actor.create<EXTToken>({
    identity,
    canisterId,
    idlFactory: EXTTokenInterfaceFactory,
  });

export const wrapICP = (identity?: ActorIdentity) =>
  actor.create<WrapICP>({
    actorName: ActorName.WICP,
    identity,
    idlFactory: WrapICPInterfaceFactory,
  });
