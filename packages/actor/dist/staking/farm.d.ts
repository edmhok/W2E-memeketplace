import { ActorIdentity } from "@w2e/types";
import { Farm, FarmController, FarmStorage } from "@w2e/candid";

export declare const v3FarmController: (
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<FarmController>>;
export declare const v3Farm: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<Farm>>;
export declare const v3FarmStorage: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<FarmStorage>>;
// # sourceMappingURL=farm.d.ts.map
