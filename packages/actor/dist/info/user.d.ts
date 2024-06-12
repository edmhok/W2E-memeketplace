import { ActorIdentity } from "@w2e/types";
import { UserStorage } from "@w2e/candid";

export declare const userStorage: (
  id: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<UserStorage>>;
// # sourceMappingURL=user.d.ts.map
