import type { PassCode } from "@w2e/candid";

export declare function getPassCode(principal: string): Promise<PassCode[]>;
export declare function usePassCode(
  principal: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<PassCode[]>;
// # sourceMappingURL=usePassCode.d.ts.map
