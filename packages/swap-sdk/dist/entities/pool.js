var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import JSBI from "jsbi";
import invariant from "tiny-invariant";
import { Price, CurrencyAmount } from "../core";
import { TICK_SPACINGS } from "../constants";
import { NEGATIVE_ONE, ONE, Q192, ZERO } from "../internalConstants";
import { computePoolAddress } from "../utils/computePoolAddress";
import { LiquidityMath } from "../utils/liquidityMath";
import { SwapMath } from "../utils/swapMath";
import { TickMath } from "../utils/tickMath";
import { NoTickDataProvider } from "./tickDataProvider";
import { TickListDataProvider } from "./tickListDataProvider";
/**
 * By default, pools will not allow operations that require ticks.
 */
const NO_TICK_DATA_PROVIDER_DEFAULT = new NoTickDataProvider();
/**
 * Represents a V3 pool
 */
export class Pool {
    static getAddress(tokenA, tokenB, fee) {
        return computePoolAddress({
            fee,
            tokenA,
            tokenB,
        });
    }
    /**
     * Construct a pool
     * @param tokenA One of the tokens in the pool
     * @param tokenB The other token in the pool
     * @param fee The fee in hundredths of a bips of the input amount of every swap that is collected by the pool
     * @param sqrtRatioX96 The sqrt of the current ratio of amounts of token1 to token0
     * @param liquidity The current value of in range liquidity
     * @param tickCurrent The current tick of the pool
     * @param ticks The current state of the pool ticks or a data provider that can return tick data
     */
    constructor(id, tokenA, tokenB, fee, sqrtRatioX96, liquidity, tickCurrent, ticks = NO_TICK_DATA_PROVIDER_DEFAULT) {
        invariant(Number.isInteger(fee) && fee < 1000000, "FEE");
        // const tickCurrentSqrtRatioX96 = TickMath.getSqrtRatioAtTick(tickCurrent);
        // const nextTickSqrtRatioX96 = TickMath.getSqrtRatioAtTick(tickCurrent + 1);
        // invariant(
        //   JSBI.greaterThanOrEqual(
        //     JSBI.BigInt(sqrtRatioX96),
        //     tickCurrentSqrtRatioX96
        //   ) &&
        //     JSBI.lessThanOrEqual(JSBI.BigInt(sqrtRatioX96), nextTickSqrtRatioX96),
        //   "PRICE_BOUNDS"
        // );
        // always create a copy of the list since we want the pool's tick list to be immutable
        [this.token0, this.token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA];
        this.id = id;
        this.fee = fee;
        this.sqrtRatioX96 = JSBI.BigInt(sqrtRatioX96);
        this.liquidity = JSBI.BigInt(liquidity);
        this.tickCurrent = tickCurrent;
        this.tickDataProvider = Array.isArray(ticks) ? new TickListDataProvider(ticks, TICK_SPACINGS[fee]) : ticks;
    }
    /**
     * Returns true if the token is either token0 or token1
     * @param token The token to check
     * @returns True if token is either token0 or token
     */
    involvesToken(token) {
        return token.equals(this.token0) || token.equals(this.token1);
    }
    /**
     * Returns the current mid price of the pool in terms of token0, i.e. the ratio of token1 over token0
     */
    get token0Price() {
        if (!this._token0Price) {
            this._token0Price = new Price(this.token0, this.token1, Q192, JSBI.multiply(this.sqrtRatioX96, this.sqrtRatioX96));
        }
        return this._token0Price;
    }
    /**
     * Returns the current mid price of the pool in terms of token1, i.e. the ratio of token0 over token1
     */
    get token1Price() {
        if (!this._token1Price) {
            this._token1Price = new Price(this.token1, this.token0, JSBI.multiply(this.sqrtRatioX96, this.sqrtRatioX96), Q192);
        }
        return this._token1Price;
    }
    /**
     * Return the price of the given token in terms of the other token in the pool.
     * @param token The token to return price of
     * @returns The price of the given token, in terms of the other.
     */
    priceOf(token) {
        invariant(this.involvesToken(token), "TOKEN");
        return token.equals(this.token0) ? this.token0Price : this.token1Price;
    }
    /**
     * Given an input amount of a token, return the computed output amount, and a pool with state updated after the trade
     * @param inputAmount The input amount for which to quote the output amount
     * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit
     * @returns The output amount and the pool with updated state
     */
    getOutputAmount(inputAmount, sqrtPriceLimitX96) {
        return __awaiter(this, void 0, void 0, function* () {
            invariant(this.involvesToken(inputAmount.currency), "TOKEN");
            const zeroForOne = inputAmount.currency.equals(this.token0);
            const { amountCalculated: outputAmount, sqrtRatioX96, liquidity, tickCurrent, } = yield this.swap(zeroForOne, inputAmount.quotient, sqrtPriceLimitX96);
            const outputToken = zeroForOne ? this.token1 : this.token0;
            return [
                CurrencyAmount.fromRawAmount(outputToken, JSBI.multiply(outputAmount, NEGATIVE_ONE)),
                new Pool(this.id, this.token0, this.token1, this.fee, sqrtRatioX96, liquidity, tickCurrent, this.tickDataProvider),
            ];
        });
    }
    /**
     * Given a desired output amount of a token, return the computed input amount and a pool with state updated after the trade
     * @param outputAmount the output amount for which to quote the input amount
     * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
     * @returns The input amount and the pool with updated state
     */
    getInputAmount(outputAmount, sqrtPriceLimitX96) {
        return __awaiter(this, void 0, void 0, function* () {
            invariant(outputAmount.currency.isToken && this.involvesToken(outputAmount.currency), "TOKEN");
            const zeroForOne = outputAmount.currency.equals(this.token1);
            const { amountCalculated: inputAmount, sqrtRatioX96, liquidity, tickCurrent, } = yield this.swap(zeroForOne, JSBI.multiply(outputAmount.quotient, NEGATIVE_ONE), sqrtPriceLimitX96);
            const inputToken = zeroForOne ? this.token0 : this.token1;
            return [
                CurrencyAmount.fromRawAmount(inputToken, inputAmount),
                new Pool(this.id, this.token0, this.token1, this.fee, sqrtRatioX96, liquidity, tickCurrent, this.tickDataProvider),
            ];
        });
    }
    /**
     * Executes a swap
     * @param zeroForOne Whether the amount in is token0 or token1
     * @param amountSpecified The amount of the swap, which implicitly configures the swap as exact input (positive), or exact output (negative)
     * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
     * @returns amountCalculated
     * @returns sqrtRatioX96
     * @returns liquidity
     * @returns tickCurrent
     */
    swap(zeroForOne, amountSpecified, _sqrtPriceLimitX96) {
        return __awaiter(this, void 0, void 0, function* () {
            let sqrtPriceLimitX96 = _sqrtPriceLimitX96;
            if (!sqrtPriceLimitX96)
                sqrtPriceLimitX96 = zeroForOne
                    ? JSBI.add(TickMath.MIN_SQRT_RATIO, ONE)
                    : JSBI.subtract(TickMath.MAX_SQRT_RATIO, ONE);
            if (zeroForOne) {
                invariant(JSBI.greaterThan(sqrtPriceLimitX96, TickMath.MIN_SQRT_RATIO), "RATIO_MIN");
                invariant(JSBI.lessThan(sqrtPriceLimitX96, this.sqrtRatioX96), "RATIO_CURRENT");
            }
            else {
                invariant(JSBI.lessThan(sqrtPriceLimitX96, TickMath.MAX_SQRT_RATIO), "RATIO_MAX");
                invariant(JSBI.greaterThan(sqrtPriceLimitX96, this.sqrtRatioX96), "RATIO_CURRENT");
            }
            const exactInput = JSBI.greaterThanOrEqual(amountSpecified, ZERO);
            // keep track of swap state
            const state = {
                amountSpecifiedRemaining: amountSpecified,
                amountCalculated: ZERO,
                sqrtPriceX96: this.sqrtRatioX96,
                tick: this.tickCurrent,
                liquidity: this.liquidity,
            };
            // start swap while loop
            while (JSBI.notEqual(state.amountSpecifiedRemaining, ZERO) && state.sqrtPriceX96 !== sqrtPriceLimitX96) {
                const step = {};
                step.sqrtPriceStartX96 = state.sqrtPriceX96;
                // because each iteration of the while loop rounds, we can't optimize this code (relative to the smart contract)
                // by simply traversing to the next available tick, we instead need to exactly replicate
                // tickBitmap.nextInitializedTickWithinOneWord
                [step.tickNext, step.initialized] = yield this.tickDataProvider.nextInitializedTickWithinOneWord(state.tick, zeroForOne, this.tickSpacing);
                if (step.tickNext < TickMath.MIN_TICK) {
                    step.tickNext = TickMath.MIN_TICK;
                }
                else if (step.tickNext > TickMath.MAX_TICK) {
                    step.tickNext = TickMath.MAX_TICK;
                }
                step.sqrtPriceNextX96 = TickMath.getSqrtRatioAtTick(step.tickNext);
                [state.sqrtPriceX96, step.amountIn, step.amountOut, step.feeAmount] = SwapMath.computeSwapStep(state.sqrtPriceX96, (zeroForOne
                    ? JSBI.lessThan(step.sqrtPriceNextX96, sqrtPriceLimitX96)
                    : JSBI.greaterThan(step.sqrtPriceNextX96, sqrtPriceLimitX96))
                    ? sqrtPriceLimitX96
                    : step.sqrtPriceNextX96, state.liquidity, state.amountSpecifiedRemaining, this.fee);
                if (exactInput) {
                    state.amountSpecifiedRemaining = JSBI.subtract(state.amountSpecifiedRemaining, JSBI.add(step.amountIn, step.feeAmount));
                    state.amountCalculated = JSBI.subtract(state.amountCalculated, step.amountOut);
                }
                else {
                    state.amountSpecifiedRemaining = JSBI.add(state.amountSpecifiedRemaining, step.amountOut);
                    state.amountCalculated = JSBI.add(state.amountCalculated, JSBI.add(step.amountIn, step.feeAmount));
                }
                // TODO
                if (JSBI.equal(state.sqrtPriceX96, step.sqrtPriceNextX96)) {
                    // if the tick is initialized, run the tick transition
                    if (step.initialized) {
                        let liquidityNet = JSBI.BigInt((yield this.tickDataProvider.getTick(step.tickNext)).liquidityNet);
                        // if we're moving leftward, we interpret liquidityNet as the opposite sign
                        // safe because liquidityNet cannot be type(int128).min
                        if (zeroForOne)
                            liquidityNet = JSBI.multiply(liquidityNet, NEGATIVE_ONE);
                        state.liquidity = LiquidityMath.addDelta(state.liquidity, liquidityNet);
                    }
                    state.tick = zeroForOne ? step.tickNext - 1 : step.tickNext;
                }
                else if (state.sqrtPriceX96 !== step.sqrtPriceStartX96) {
                    // recompute unless we're on a lower tick boundary (i.e. already transitioned ticks), and haven't moved
                    state.tick = TickMath.getTickAtSqrtRatio(state.sqrtPriceX96);
                }
            }
            return {
                amountCalculated: state.amountCalculated,
                sqrtRatioX96: state.sqrtPriceX96,
                liquidity: state.liquidity,
                tickCurrent: state.tick,
            };
        });
    }
    get tickSpacing() {
        return TICK_SPACINGS[this.fee];
    }
}
//# sourceMappingURL=pool.js.map