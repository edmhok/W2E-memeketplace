import { DIP20InterfaceFactory, DIP20BalanceInterfaceFactory, XTCInterfaceFactory, DIP20SupplyInterfaceFactory, } from "@w2e/candid";
import { actor } from "../actor";

export const xtc = (identity) => actor.create({
    identity,
    idlFactory: XTCInterfaceFactory,
    canisterId: "aanaa-xaaaa-aaaah-aaeiq-cai",
});
export const dip20 = (canisterId, identity) => actor.create({
    identity,
    idlFactory: DIP20InterfaceFactory,
    canisterId,
});
export const dip20BalanceActor = (canisterId, identity) => actor.create({
    identity,
    idlFactory: DIP20BalanceInterfaceFactory,
    canisterId,
});
export const dip20SupplyActor = (canisterId, identity) => actor.create({
    identity,
    idlFactory: DIP20SupplyInterfaceFactory,
    canisterId,
});
// # sourceMappingURL=dip20.js.map