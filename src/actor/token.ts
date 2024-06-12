import { Identity } from "types/index";
import { wrapICP } from "@w2e/actor";

export const WICP = async (identity?: Identity) => await wrapICP(identity);
