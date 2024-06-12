import { ActorIdentity } from "@w2e/types";
import {
  Farm,
  FarmInterfaceFactory,
  FarmController,
  FarmControllerInterfaceFactory,
  FarmStorage,
  FarmStorageInterfaceFactory,
} from "@w2e/candid";
import { actor } from "../actor";
import { ActorName } from "../ActorName";

export const v3FarmController = (identity?: ActorIdentity) =>
  actor.create<FarmController>({
    actorName: ActorName.FarmController,
    identity,
    idlFactory: FarmControllerInterfaceFactory,
  });

export const v3Farm = (canisterId: string, identity?: ActorIdentity) =>
  actor.create<Farm>({
    actorName: ActorName.Farm,
    canisterId,
    identity,
    idlFactory: FarmInterfaceFactory,
  });

export const v3FarmStorage = (canisterId: string, identity?: ActorIdentity) =>
  actor.create<FarmStorage>({
    actorName: ActorName.FarmStorage,
    canisterId,
    identity,
    idlFactory: FarmStorageInterfaceFactory,
  });
