import { actor } from "../actor";
import { ActorName } from "../ActorName";
import { GlobalIndexInterfaceFactory, GlobalStorageInterfaceFactory, GlobalTVLInterfaceFactory, } from "@w2e/candid";
export const globalIndex = (identity) => actor.create({
    idlFactory: GlobalIndexInterfaceFactory,
    actorName: ActorName.GlobalIndex,
    identity,
});
export const globalStorage = (id) => actor.create({
    idlFactory: GlobalStorageInterfaceFactory,
    canisterId: id,
});
export const globalTVL = (id, identity) => actor.create({
    idlFactory: GlobalTVLInterfaceFactory,
    canisterId: id,
    identity,
});
//# sourceMappingURL=global.js.map