import { ActorIdentity } from "@w2e/types";
import { Ledger, LedgerInterfaceFactory } from "@w2e/candid";

import { LEDGER_CANISTER_ID, ic_host } from "@w2e/constants";
import { actor } from "../actor";

export const ledgerService = (identity?: ActorIdentity) =>
  actor.create<Ledger>({
    idlFactory: LedgerInterfaceFactory,
    canisterId: LEDGER_CANISTER_ID,
    identity,
    host: ic_host,
  });
