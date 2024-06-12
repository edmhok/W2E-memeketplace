import { ActorIdentity } from "@w2e/types";
import {
  TokenPool,
  TokenPoolController,
  TokenPoolStorage,
  V1TokenPool,
  V1TokenPoolController,
  V1TokenPoolStorage,
} from "@w2e/candid";

export declare const stakingTokenController: (
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<TokenPoolController>>;
export declare const stakingToken: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<TokenPool>>;
export declare const stakingTokenStorage: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<TokenPoolStorage>>;
export declare const v1StakingTokenController: (
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<V1TokenPoolController>>;
export declare const v1StakingToken: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<V1TokenPool>>;
export declare const v1StakingTokenStorage: (
  canisterId: any,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<V1TokenPoolStorage>>;
// # sourceMappingURL=token.d.ts.map
