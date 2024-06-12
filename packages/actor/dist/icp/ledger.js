import { actor } from "../actor";
import { LedgerInterfaceFactory } from "@w2e/candid";
import { LEDGER_CANISTER_ID, ic_host } from "@w2e/constants";
export const ledgerService = (identity) => actor.create({
    idlFactory: LedgerInterfaceFactory,
    canisterId: LEDGER_CANISTER_ID,
    identity,
    host: ic_host,
});
//# sourceMappingURL=ledger.js.map