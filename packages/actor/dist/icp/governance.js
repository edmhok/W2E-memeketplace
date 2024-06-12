import { GovernanceInterfaceFactory } from "@w2e/candid";
import { GOVERNANCE_CANISTER_ID, ic_host } from "@w2e/constants";
import { actor } from "../actor";

export const governanceService = (identity) => actor.create({
    idlFactory: GovernanceInterfaceFactory,
    canisterId: GOVERNANCE_CANISTER_ID,
    identity,
    host: ic_host,
});
// # sourceMappingURL=governance.js.map