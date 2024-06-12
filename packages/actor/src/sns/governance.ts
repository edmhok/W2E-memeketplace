import { SNS_GOVERNANCE_INTERFACE_FACTORY, SNS_GOVERNANCE_SERVICE } from "@w2e/candid";
import { actor } from "../actor";

export const sns_governance = async (canisterId: string, identity?: true) =>
  actor.create<SNS_GOVERNANCE_SERVICE>({
    canisterId,
    idlFactory: SNS_GOVERNANCE_INTERFACE_FACTORY,
    identity,
  });
