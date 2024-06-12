import { ActorIdentity } from "@w2e/types";
import { ClaimController, ClaimStorage } from "@w2e/candid";

export declare const tokenClaimController: (
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<ClaimController>>;
export declare const tokenClaimStorage: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<ClaimStorage>>;
// # sourceMappingURL=token-claim.d.ts.map
