import { actor } from "../actor";
import { ActorName } from "../ActorName";
import { V3TradeCanisterInterfaceFactory, NFTCanisterInterfaceFactory, V3TradeStatInterfaceFactory, V3NFTCanisterControllerInterfaceFactory, NFTFileInterfaceFactory, V1NFTCanisterInterfaceFactory, ExtNFTInterfaceFactory, } from "@w2e/candid";
export const NFTCanisterController = (identity) => actor.create({
    actorName: ActorName.NFTCanisterController,
    identity,
    idlFactory: V3NFTCanisterControllerInterfaceFactory,
});
export const NFTCanister = (canisterId, identity) => actor.create({
    canisterId,
    identity,
    actorName: ActorName.NFTCanister,
    idlFactory: NFTCanisterInterfaceFactory,
});
export const NFTTradeCanister = (identity) => {
    return actor.create({
        identity,
        actorName: ActorName.NFTTradeCanister,
        idlFactory: V3TradeCanisterInterfaceFactory,
    });
};
export const NFTTradeStat = (identity) => {
    return actor.create({
        identity,
        actorName: ActorName.NFTTradeStat,
        idlFactory: V3TradeStatInterfaceFactory,
    });
};
export const NFT_V1 = (canisterId, identity) => {
    return actor.create({
        identity,
        idlFactory: V1NFTCanisterInterfaceFactory,
        canisterId,
    });
};
export const nftFile = (canisterId, identity) => {
    return actor.create({
        identity,
        idlFactory: NFTFileInterfaceFactory,
        canisterId,
    });
};
export const ext_nft = (canisterId, identity) => {
    return actor.create({
        identity,
        idlFactory: ExtNFTInterfaceFactory,
        canisterId,
    });
};
//# sourceMappingURL=index.js.map