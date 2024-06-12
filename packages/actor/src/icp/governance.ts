import { ActorIdentity } from "@w2e/types";
import { Governance, GovernanceInterfaceFactory } from "@w2e/candid";
import { GOVERNANCE_CANISTER_ID, ic_host } from "@w2e/constants";
import { actor } from "../actor";

export const governanceService = (identity?: ActorIdentity) =>
  actor.create<Governance>({
    idlFactory: GovernanceInterfaceFactory,
    canisterId: GOVERNANCE_CANISTER_ID,
    identity,
    host: ic_host,
  });
