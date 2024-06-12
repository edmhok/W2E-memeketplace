import { ActorIdentity } from "@w2e/types";
import { TokenStorage } from "@w2e/candid";

export declare const tokenStorage: (
  id: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<TokenStorage>>;
// # sourceMappingURL=token.d.ts.map
