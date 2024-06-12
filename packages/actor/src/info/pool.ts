import { ActorIdentity } from "@w2e/types";
import { PoolStorage, PoolStorageInterfaceFactory } from "@w2e/candid";
import { actor } from "../actor";

export const poolStorage = (id: string, identity?: ActorIdentity) =>
  actor.create<PoolStorage>({
    idlFactory: PoolStorageInterfaceFactory,
    canisterId: id,
    identity,
  });
