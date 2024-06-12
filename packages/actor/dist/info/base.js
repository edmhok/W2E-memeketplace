import { actor } from "../actor";
import { ActorName } from "../ActorName";
import { BaseIndexInterfaceFactory, BaseStorageInterfaceFactory, } from "@w2e/candid";
export const baseIndex = (identity) => actor.create({
    idlFactory: BaseIndexInterfaceFactory,
    actorName: ActorName.BaseIndex,
    identity,
});
export const baseStorage = (id, identity) => actor.create({
    idlFactory: BaseStorageInterfaceFactory,
    canisterId: id,
    identity,
});
//# sourceMappingURL=base.js.map