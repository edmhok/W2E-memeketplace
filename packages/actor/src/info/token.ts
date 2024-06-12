import { ActorIdentity } from "@w2e/types";
import { TokenStorage, TokenStorageInterfaceFactory } from "@w2e/candid";
import { actor } from "../actor";

export const tokenStorage = (id: string, identity?: ActorIdentity) =>
  actor.create<TokenStorage>({
    idlFactory: TokenStorageInterfaceFactory,
    canisterId: id,
    identity,
  });
