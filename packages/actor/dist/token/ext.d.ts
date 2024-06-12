import { ActorIdentity } from "@w2e/types";
import { WrapICP, EXTToken } from "@w2e/candid";

export declare const ext: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<EXTToken>>;
export declare const wrapICP: (identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<WrapICP>>;
// # sourceMappingURL=ext.d.ts.map
