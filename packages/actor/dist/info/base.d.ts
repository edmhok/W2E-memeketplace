import { ActorIdentity } from "@w2e/types";
import { BaseIndex, BaseStorage } from "@w2e/candid";

export declare const baseIndex: (
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<BaseIndex>>;
export declare const baseStorage: (
  id: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<BaseStorage>>;
// # sourceMappingURL=base.d.ts.map
