import { ExchangeRateInterfaceFactory } from "@w2e/candid";
import { actor } from "../actor";

export const exchangeRate = () => actor.create({
    canisterId: "2ixw4-taaaa-aaaag-qcpdq-cai",
    idlFactory: ExchangeRateInterfaceFactory,
});
// # sourceMappingURL=exchangeRate.js.map