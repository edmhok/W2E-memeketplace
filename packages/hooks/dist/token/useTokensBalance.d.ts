import { Principal } from "@dfinity/principal";
export declare enum TokenBalanceState {
    LOADING = "LOADING",
    VALID = "VALID",
    INVALID = "INVALID"
}
export interface UserTokensBalanceArgs {
    tokenIds: string[];
    address: string | Principal | undefined;
}
export interface UserTokensBalanceResult {
    state: TokenBalanceState;
    balance: bigint | undefined;
}
export declare function useTokensBalance({ tokenIds, address }: UserTokensBalanceArgs): UserTokensBalanceResult[];
//# sourceMappingURL=useTokensBalance.d.ts.map