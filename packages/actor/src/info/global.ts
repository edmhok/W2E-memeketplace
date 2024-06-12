import { ActorIdentity } from "@w2e/types";
import {
  GlobalIndex,
  GlobalIndexInterfaceFactory,
  GlobalStorage,
  GlobalStorageInterfaceFactory,
  GlobalTVL,
  GlobalTVLInterfaceFactory,
} from "@w2e/candid";
import { actor } from "../actor";
import { ActorName } from "../ActorName";

export const globalIndex = (identity?: ActorIdentity) =>
  actor.create<GlobalIndex>({
    idlFactory: GlobalIndexInterfaceFactory,
    actorName: ActorName.GlobalIndex,
    identity,
  });

export const globalStorage = (id: string) =>
  actor.create<GlobalStorage>({
    idlFactory: GlobalStorageInterfaceFactory,
    canisterId: id,
  });

export const globalTVL = (id: string, identity?: ActorIdentity) =>
  actor.create<GlobalTVL>({
    idlFactory: GlobalTVLInterfaceFactory,
    canisterId: id,
    identity,
  });
