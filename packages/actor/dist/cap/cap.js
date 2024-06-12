import { CapInterfaceFactory, CapRouterInterfaceFactory, } from "@w2e/candid";
import { actor } from "../actor";

export const cap = (canisterId) => actor.create({
    idlFactory: CapInterfaceFactory,
    canisterId,
});
export const cap_router = () => actor.create({
    idlFactory: CapRouterInterfaceFactory,
    canisterId: "lj532-6iaaa-aaaah-qcc7a-cai",
});
// # sourceMappingURL=cap.js.map