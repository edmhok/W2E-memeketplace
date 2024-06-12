import { Token } from "../core";
import { FeeAmount } from "../constants";
/**
 * Computes a pool address
 * @param token0 The first token of the pair, irrespective of sort order
 * @param token1 The second token of the pair, irrespective of sort order
 * @param fee The fee tier of the pool
 * @returns The pool address
 */
export declare function computePoolAddress({ tokenA, tokenB, fee, }: {
    tokenA: Token;
    tokenB: Token;
    fee: FeeAmount;
}): string;
export declare function computePoolAddressFromTokenAddress(token0Address: string, token1Address: string, fee: number): string | undefined;
//# sourceMappingURL=computePoolAddress.d.ts.map