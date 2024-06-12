import { ActorIdentity } from "@w2e/types";
import { BaseIndex, BaseStorage, BaseIndexInterfaceFactory, BaseStorageInterfaceFactory } from "@w2e/candid";
import { actor } from "../actor";
import { ActorName } from "../ActorName";

export const baseIndex = (identity?: ActorIdentity) =>
  actor.create<BaseIndex>({
    idlFactory: BaseIndexInterfaceFactory,
    actorName: ActorName.BaseIndex,
    identity,
  });

export const baseStorage = (id: string, identity?: ActorIdentity) =>
  actor.create<BaseStorage>({
    idlFactory: BaseStorageInterfaceFactory,
    canisterId: id,
    identity,
  });
