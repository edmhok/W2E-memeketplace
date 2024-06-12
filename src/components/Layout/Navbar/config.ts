import TwitterIcon from "./icons/Twitter";
import TelegramIcon from "./icons/Telegram";
import DiscordIcon from "./icons/Discord";
import MediumIcon from "./icons/Medium";
import GithubIcon from "./icons/Github";
import GitbookIcon from "./icons/Gitbook";
import { version } from "../../../.version";

export type Route = {
  name: string;
  path?: string;
  link?: string;
  subMenus?: SubMenu[];
  key: string;
  icon?: () => JSX.Element;
  disabled?: boolean;
};

export type SubMenu = Route;

export const MAX_NUMBER = 5;

export const MOBILE_MAX_NUMBER = 5;

export const routes: Route[] = [
  {
    key: "home",
    name: `Home`,
    path: "/home",
  },
  {
    key: "swap",
    name: `Swap`,
    path: "/swap",
  },
  {
    key: "marketplace",
    name: `Marketplace`,
    path: "/marketplace/collections",
  },
  {
    key: "wallet",
    name: `Wallet`,
    subMenus: [
      { key: "Wallet1", name: `Wallet v1`, path: "/wallet" },
      { key: "Wallet2", name: `betaWallet`, link: "https://mqvnf-sqaaa-aaaap-ahhpa-cai.icp0.io/" },
    ],
  },
  {
    key: "voting",
    name: `Voting`,
    path: `/voting`,
  },
  {
    key: "followUS",
    name: `Follow US`,
    subMenus: [
      { key: "followUS_twitter", name: `Twitter`, link: "https://twitter.com/waste2earn", icon: TwitterIcon },
      { key: "followUS_Telegram", name: `Telegram`, link: "https://t.me/+stHCP7ZCoKcyNWY1", icon: TelegramIcon },
      { key: "followUS_Medium", name: `Medium`, link: "https://medium.com/@waste2earn.io", icon: MediumIcon },
      { key: "followUS_Gitbook", name: `Gitbook`, link: "https://waste2earn.gitbook.io/", icon: GitbookIcon },
      { key: "followUS_Github", name: `Github`, link: "https://github.com/wastopia", icon: GithubIcon },
      { key: "followUS_Discord", name: `Discord`, link: "https://discord.gg/GbnNzjQe", icon: DiscordIcon },
    ],
  },
  {
    key: "feedback",
    name: "White listing",
    link: "https://forms.gle/A7NUvs66g8NiBTYQ8",
  },
  {
    key: "claim",
    name: "Airdrop",
    path: "/token-claim",
  },
  {
    key: "version",
    name: `Version ${version}`,
    path: "",
    disabled: true,
  },
];
