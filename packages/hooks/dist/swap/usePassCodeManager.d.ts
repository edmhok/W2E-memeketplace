import { Principal } from "@dfinity/principal";
export declare function usePCMMetadata(): import("@w2e/types").CallResult<{
  passcodePrice: bigint;
  tokenCid: Principal;
  factoryCid: Principal;
}>;
export declare function requestPassCode(
  token0: Principal,
  token1: Principal,
  fee: bigint,
): Promise<import("@w2e/types").StatusResult<string>>;
export declare function withdrawPCMBalance(
  amount: bigint,
  fee: bigint,
): Promise<import("@w2e/types").StatusResult<bigint>>;
export declare function destroyPassCode(
  token0: string,
  token1: string,
  fee: bigint,
): Promise<import("@w2e/types").StatusResult<string>>;
export declare function useUserPCMBalance(
  principal: Principal | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<bigint>;
//# sourceMappingURL=usePassCodeManager.d.ts.map
