import { jsx as _jsx } from "react/jsx-runtime";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import DiscordIcon from "./Discord";
import TwitterIcon from "./Twitter";
import TelegramIcon from "./Telegram";
import DistriktIcon from "./Distrikt";
import DscvrIcon from "./Dscvr";
import InstagramIcon from "./Instagram";
import MediumIcon from "./Medium";
import WebsiteIcon from "./Website";
import OtherIcon from "./Other";
import GithubIcon from "./Github";
import OpenChatIcon from "./OpenChat";
import Dashboard from "./Dashboard";
import ICScan from "./ICScan";
export const Icons = {
    Website: WebsiteIcon,
    Discord: DiscordIcon,
    Twitter: TwitterIcon,
    Dscvr: DscvrIcon,
    Distrikt: DistriktIcon,
    Telegram: TelegramIcon,
    Instagram: InstagramIcon,
    Medium: MediumIcon,
    Other: OtherIcon,
    Github: GithubIcon,
    OpenChat: OpenChatIcon,
    Dashboard,
    ICScan,
};
export function MediaLinkIcon({ k, size }) {
    const Icon = Icons[k];
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
    return Icon ? _jsx(Icon, { width: size !== null && size !== void 0 ? size : (matchDownMd ? 24 : 28) }) : null;
}
//# sourceMappingURL=Icon.js.map