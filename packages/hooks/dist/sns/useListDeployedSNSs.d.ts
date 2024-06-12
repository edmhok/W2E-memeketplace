import type { ListDeployedSnsesResponse } from "@w2e/candid";
import type { SnsTokensInfo } from "@w2e/types";

export declare function getListDeployedSNSs(): Promise<ListDeployedSnsesResponse>;
export declare function useListDeployedSNSs(): import("@w2e/types").CallResult<ListDeployedSnsesResponse>;
export declare function getSnsTokensInfo(page: number): Promise<SnsTokensInfo[] | undefined>;
export declare function getSnsAllTokensInfo(): Promise<SnsTokensInfo[]>;
export declare function useSnsAllTokensInfo(): {
  loading: boolean;
  result: SnsTokensInfo[];
};
// # sourceMappingURL=useListDeployedSNSs.d.ts.map
