import type { SnsTokensInfo } from "@w2e/types";

export interface SnsState {
  snsAllTokensInfo: SnsTokensInfo[];
}

export const initialState: SnsState = {
  snsAllTokensInfo: [],
};
