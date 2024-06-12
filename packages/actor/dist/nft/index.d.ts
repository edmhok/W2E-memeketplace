import { ActorIdentity } from "@w2e/types";
import {
  V3TradeCanister,
  NFTCanister as NFT_SERVICE,
  V3TradeStat,
  V3NFTCanisterController,
  NFTFile,
  V1NFTCanister,
  ExtNFTService,
} from "@w2e/candid";

export declare const NFTCanisterController: (
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<V3NFTCanisterController>>;
export declare const NFTCanister: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<NFT_SERVICE>>;
export declare const NFTTradeCanister: (
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<V3TradeCanister>>;
export declare const NFTTradeStat: (
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<V3TradeStat>>;
export declare const NFT_V1: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<V1NFTCanister>>;
export declare const nftFile: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<NFTFile>>;
export declare const ext_nft: (
  canisterId: string,
  identity?: ActorIdentity,
) => Promise<import("@dfinity/agent").ActorSubclass<ExtNFTService>>;
// # sourceMappingURL=index.d.ts.map
