import { actor } from "../actor";
import { UserStorageInterfaceFactory } from "@w2e/candid";
export const userStorage = (id, identity) => actor.create({
    idlFactory: UserStorageInterfaceFactory,
    canisterId: id,
    identity,
});
//# sourceMappingURL=user.js.map