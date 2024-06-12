import { actor } from "../actor";
import { ActorName } from "../ActorName";
import { FarmInterfaceFactory, FarmControllerInterfaceFactory, FarmStorageInterfaceFactory, } from "@w2e/candid";
export const v3FarmController = (identity) => actor.create({
    actorName: ActorName.FarmController,
    identity,
    idlFactory: FarmControllerInterfaceFactory,
});
export const v3Farm = (canisterId, identity) => actor.create({
    actorName: ActorName.Farm,
    canisterId,
    identity,
    idlFactory: FarmInterfaceFactory,
});
export const v3FarmStorage = (canisterId, identity) => actor.create({
    actorName: ActorName.FarmStorage,
    canisterId,
    identity,
    idlFactory: FarmStorageInterfaceFactory,
});
//# sourceMappingURL=farm.js.map