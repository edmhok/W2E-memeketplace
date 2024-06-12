import { actor } from "../actor";
import { PoolStorageInterfaceFactory } from "@w2e/candid";
export const poolStorage = (id, identity) => actor.create({
    idlFactory: PoolStorageInterfaceFactory,
    canisterId: id,
    identity,
});
//# sourceMappingURL=pool.js.map