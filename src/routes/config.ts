import { lazy } from "react";
import Loadable from "../components/Loading/Loadable";

const Home = Loadable(lazy(() => import("../views/home")));

const NFTView = Loadable(lazy(() => import("../views/nft/View")));
const WalletNFTView = Loadable(lazy(() => import("../views/nft/WalletNFTView")));
const NFTMint = Loadable(lazy(() => import("../views/nft/Mint")));
const Console = Loadable(lazy(() => import("../views/console/index")));
const ConsoleBurn = Loadable(lazy(() => import("../views/console/burn")));

const NFTCanisterList = Loadable(lazy(() => import("../views/nft/CanisterList")));
const NFTCanisterCreate = Loadable(lazy(() => import("../views/nft/CanisterCreate")));
const NFTCanisterDetails = Loadable(lazy(() => import("../views/nft/CanisterDetails")));

const NFTMarket = Loadable(lazy(() => import("../views/nft")));
const NFTCollectMarket = Loadable(lazy(() => import("../views/nft/Collection")));
const NFTMarketCollections = Loadable(lazy(() => import("../views/nft/MarketplaceCollections")));

export const routeConfigs: { [path: string]: (props: any) => JSX.Element } = {
  "/home": Home,

  "/wallet/nft/view/:canisterId/:tokenId": WalletNFTView,
  "/wallet/nft/canister/details/:id": NFTCanisterDetails,

  "/marketplace/NFT": NFTMarket,
  "/marketplace/NFT/:canisterId": NFTCollectMarket,
  "/marketplace/NFT/view/:canisterId/:tokenId": NFTView,
  "/marketplace/collections": NFTMarketCollections,

  "/console": Console,
  "/console/burn": ConsoleBurn,
  "/console/nft/canister/create": NFTCanisterCreate,
  "/console/nft/mint": NFTMint,
  "/console/nft/canister/list": NFTCanisterList,
};
