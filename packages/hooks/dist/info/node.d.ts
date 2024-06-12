import { PublicPoolOverView, PublicTokenOverview } from "@w2e/types";

export declare function getInfoAllPools(): Promise<PublicPoolOverView[]>;
export declare function useInfoAllPools(): import("@w2e/types").CallResult<PublicPoolOverView[]>;
export declare function getInfoAllTokens(): Promise<PublicTokenOverview[]>;
export declare function useInfoAllTokens(): import("@w2e/types").CallResult<PublicTokenOverview[]>;
export declare function getInfoPoolStorageIds(pool: string): Promise<string[]>;
export declare function useInfoPoolStorageIds(pool: string | undefined): import("@w2e/types").CallResult<string[]>;
export declare function getInfoTokenStorageIds(token: string): Promise<string[]>;
export declare function useInfoTokenStorageIds(token: string | undefined): import("@w2e/types").CallResult<string[]>;
export declare function getInfoUserStorageIds(principal: string): Promise<string[]>;
export declare function useInfoUserStorageIds(principal: string | undefined): import("@w2e/types").CallResult<string[]>;
// # sourceMappingURL=node.d.ts.map
