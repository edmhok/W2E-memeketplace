import { createContext, useContext } from "react";
import type { SwapPoolData } from "@w2e/types";

export type GlobalContextProps = {
  AllPools: SwapPoolData[] | undefined;
};

export const GlobalContext = createContext({} as GlobalContextProps);

export function useGlobalContext() {
  return useContext(GlobalContext);
}
