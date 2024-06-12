import { ClaimControllerInterfaceFactory, ClaimStorageInterfaceFactory, } from "@w2e/candid";
import { actor } from "./actor";
import { ActorName } from "./ActorName";

export const tokenClaimController = (identity) => actor.create({
    actorName: ActorName.ClaimController,
    identity,
    idlFactory: ClaimControllerInterfaceFactory,
});
export const tokenClaimStorage = (canisterId, identity) => actor.create({
    identity,
    canisterId,
    idlFactory: ClaimStorageInterfaceFactory,
});
// # sourceMappingURL=token-claim.js.map