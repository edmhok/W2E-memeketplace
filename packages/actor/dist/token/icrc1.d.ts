import { ICRCArchive, ICRC1_SERVICE, ICRC2 } from "@w2e/candid";
import type { ActorIdentity } from "@w2e/types";

export declare const icrcArchive: (canisterId: string) => Promise<import("@dfinity/agent").ActorSubclass<ICRCArchive>>;
export declare const icrc1: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<ICRC1_SERVICE>>;
export declare const icrc2: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<ICRC2>>;
// # sourceMappingURL=icrc1.d.ts.map
