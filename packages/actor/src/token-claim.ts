import { ActorIdentity } from "@w2e/types";
import {
  ClaimController,
  ClaimControllerInterfaceFactory,
  ClaimStorage,
  ClaimStorageInterfaceFactory,
} from "@w2e/candid";
import { actor } from "./actor";
import { ActorName } from "./ActorName";

export const tokenClaimController = (identity?: ActorIdentity) =>
  actor.create<ClaimController>({
    actorName: ActorName.ClaimController,
    identity,
    idlFactory: ClaimControllerInterfaceFactory,
  });

export const tokenClaimStorage = (canisterId: string, identity?: ActorIdentity) =>
  actor.create<ClaimStorage>({
    identity,
    canisterId,
    idlFactory: ClaimStorageInterfaceFactory,
  });
