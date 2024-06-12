import { createAction } from "@reduxjs/toolkit";
import type { SnsTokensInfo } from "@w2e/types";

export const updateSnsAllTokensInfo = createAction<SnsTokensInfo[]>("global/updateSnsAllTokensInfo");
