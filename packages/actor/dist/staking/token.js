import { actor } from "../actor";
import { ActorName } from "../ActorName";
import { TokenPoolControllerInterfaceFactory, TokenPoolInterfaceFactory, TokenPoolStorageInterfaceFactory, V1TokenPoolInterfaceFactory, V1TokenPoolControllerInterfaceFactory, V1TokenPoolStorageInterfaceFactory, } from "@w2e/candid";
export const stakingTokenController = (identity) => actor.create({
    actorName: ActorName.TokenPoolController,
    identity,
    idlFactory: TokenPoolControllerInterfaceFactory,
});
export const stakingToken = (canisterId, identity) => actor.create({
    canisterId,
    actorName: ActorName.TokenPool,
    identity,
    idlFactory: TokenPoolInterfaceFactory,
});
export const stakingTokenStorage = (canisterId, identity) => actor.create({
    canisterId,
    actorName: ActorName.TokenPoolStorage,
    identity,
    idlFactory: TokenPoolStorageInterfaceFactory,
});
/* v1 staking token pool */
export const v1StakingTokenController = (identity) => actor.create({
    actorName: ActorName.V1TokenPoolController,
    identity,
    idlFactory: V1TokenPoolControllerInterfaceFactory,
});
export const v1StakingToken = (canisterId, identity) => actor.create({
    canisterId,
    actorName: ActorName.V1TokenPool,
    identity,
    idlFactory: V1TokenPoolInterfaceFactory,
});
export const v1StakingTokenStorage = (canisterId, identity) => actor.create({
    actorName: ActorName.V1TokenPoolStorage,
    canisterId,
    identity,
    idlFactory: V1TokenPoolStorageInterfaceFactory,
});
/* v1 staking token pool */
//# sourceMappingURL=token.js.map