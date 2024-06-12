import { ActorIdentity } from "@w2e/types";
import { DIP20, DIP20Balance, XTC, DIP20Supply } from "@w2e/candid";

export declare const xtc: (identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<XTC>>;
export declare const dip20: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<DIP20>>;
export declare const dip20BalanceActor: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<DIP20Balance>>;
export declare const dip20SupplyActor: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<DIP20Supply>>;
// # sourceMappingURL=dip20.d.ts.map
