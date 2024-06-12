import { Principal } from "@dfinity/principal";
import BigNumber from "bignumber.js";
export interface GetTokenBalanceArgs {
  canisterId: string;
  address: string | Principal;
  sub?: Uint8Array;
}
export declare function getTokenBalance({ canisterId, address, sub }: GetTokenBalanceArgs): Promise<bigint>;
export interface UserTokenBalanceArgs {
  canisterId: string | undefined;
  address: string | Principal | undefined;
  sub?: Uint8Array;
  reload?: boolean | number;
}
export declare function useTokenBalance({
  canisterId,
  address,
  sub,
  reload,
}: UserTokenBalanceArgs): import("@w2e/types").CallResult<BigNumber>;
//# sourceMappingURL=useTokenBalance.d.ts.map
