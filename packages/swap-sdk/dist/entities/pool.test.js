import JSBI from "jsbi";
import { Token, CurrencyAmount } from "../core";
import { FeeAmount, TICK_SPACINGS } from "../constants";
import { nearestUsableTick } from "../utils/nearestUsableTick";
import { TickMath } from "../utils/tickMath";
import { Pool } from "./pool";
import { encodeSqrtRatioX96 } from "../utils/encodeSqrtRatioX96";
import { NEGATIVE_ONE } from "../internalConstants";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const ONE_ETHER = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18));
describe("Pool", () => {
    const USDC = new Token({
        address: "zfcdd-tqaaa-aaaaq-aaaga-cai",
        decimals: 6,
        symbol: "USDC",
        name: "USD Coin",
        standard: "EXT",
    });
    const DAI = new Token({
        address: "mxzaz-hqaaa-aaaar-qaada-cai",
        decimals: 18,
        symbol: "DAI",
        name: "DAI Stablecoin",
        standard: "EXT",
    });
    describe("constructor", () => {
        it("cannot be given two of the same token", () => {
            expect(() => {
                new Pool("xxxxxxxx", USDC, USDC, FeeAmount.MEDIUM, encodeSqrtRatioX96(1, 1), 0, 0, []);
            }).toThrow("ADDRESSES");
        });
    });
    describe("#getAddress", () => {
        it("matches an example", () => {
            const result = Pool.getAddress(USDC, DAI, FeeAmount.LOW);
            expect(result).toEqual("mxzaz-hqaaa-aaaar-qaada-cai_zfcdd-tqaaa-aaaaq-aaaga-cai_500");
        });
    });
    describe("#token0", () => {
        it("always is the token that sorts before", () => {
            let pool = new Pool("xxxxxxxx", USDC, DAI, FeeAmount.LOW, encodeSqrtRatioX96(1, 1), 0, 0, []);
            expect(pool.token0).toEqual(DAI);
            pool = new Pool("xxxxxxxx", DAI, USDC, FeeAmount.LOW, encodeSqrtRatioX96(1, 1), 0, 0, []);
            expect(pool.token0).toEqual(DAI);
        });
    });
    describe("#token1", () => {
        it("always is the token that sorts after", () => {
            let pool = new Pool("xxxxxxxx", USDC, DAI, FeeAmount.LOW, encodeSqrtRatioX96(1, 1), 0, 0, []);
            expect(pool.token1).toEqual(USDC);
            pool = new Pool("xxxxxxxx", DAI, USDC, FeeAmount.LOW, encodeSqrtRatioX96(1, 1), 0, 0, []);
            expect(pool.token1).toEqual(USDC);
        });
    });
    describe("#token0Price", () => {
        it("returns price of token0 in terms of token1", () => {
            expect(new Pool("xxxxxxxx", USDC, DAI, FeeAmount.LOW, encodeSqrtRatioX96(101e6, 100e18), 0, TickMath.getTickAtSqrtRatio(encodeSqrtRatioX96(101e6, 100e18)), []).token0Price.toSignificant(5)).toEqual("1.01");
            expect(new Pool("xxxxxxxx", DAI, USDC, FeeAmount.LOW, encodeSqrtRatioX96(101e6, 100e18), 0, TickMath.getTickAtSqrtRatio(encodeSqrtRatioX96(101e6, 100e18)), []).token0Price.toSignificant(5)).toEqual("1.01");
        });
    });
    describe("#token1Price", () => {
        it("returns price of token1 in terms of token0", () => {
            expect(new Pool("xxxxxxxx", USDC, DAI, FeeAmount.LOW, encodeSqrtRatioX96(101e6, 100e18), 0, TickMath.getTickAtSqrtRatio(encodeSqrtRatioX96(101e6, 100e18)), []).token1Price.toSignificant(5)).toEqual("0.9901");
            expect(new Pool("xxxxxxxx", DAI, USDC, FeeAmount.LOW, encodeSqrtRatioX96(101e6, 100e18), 0, TickMath.getTickAtSqrtRatio(encodeSqrtRatioX96(101e6, 100e18)), []).token1Price.toSignificant(5)).toEqual("0.9901");
        });
    });
    describe("#priceOf", () => {
        const pool = new Pool("xxxxxxxx", USDC, DAI, FeeAmount.LOW, encodeSqrtRatioX96(1, 1), 0, 0, []);
        it("returns price of token in terms of other token", () => {
            expect(pool.priceOf(DAI)).toEqual(pool.token0Price);
            expect(pool.priceOf(USDC)).toEqual(pool.token1Price);
        });
    });
    describe("#involvesToken", () => {
        const pool = new Pool("xxxxxxxx", USDC, DAI, FeeAmount.LOW, encodeSqrtRatioX96(1, 1), 0, 0, []);
        expect(pool.involvesToken(USDC)).toEqual(true);
        expect(pool.involvesToken(DAI)).toEqual(true);
    });
    describe("swaps", () => {
        let pool;
        beforeEach(() => {
            pool = new Pool("xxxxxxxx", USDC, DAI, FeeAmount.LOW, encodeSqrtRatioX96(1, 1), ONE_ETHER, 0, [
                {
                    index: nearestUsableTick(TickMath.MIN_TICK, TICK_SPACINGS[FeeAmount.LOW]),
                    liquidityNet: ONE_ETHER,
                    liquidityGross: ONE_ETHER,
                },
                {
                    index: nearestUsableTick(TickMath.MAX_TICK, TICK_SPACINGS[FeeAmount.LOW]),
                    liquidityNet: JSBI.multiply(ONE_ETHER, NEGATIVE_ONE),
                    liquidityGross: ONE_ETHER,
                },
            ]);
        });
        describe("#getOutputAmount", () => {
            it("USDC -> DAI", () => __awaiter(void 0, void 0, void 0, function* () {
                const inputAmount = CurrencyAmount.fromRawAmount(USDC, 100);
                const [outputAmount] = yield pool.getOutputAmount(inputAmount);
                expect(outputAmount.currency.equals(DAI)).toBe(true);
                expect(outputAmount.quotient).toEqual(JSBI.BigInt(98));
            }));
            it("DAI -> USDC", () => __awaiter(void 0, void 0, void 0, function* () {
                const inputAmount = CurrencyAmount.fromRawAmount(DAI, 100);
                const [outputAmount] = yield pool.getOutputAmount(inputAmount);
                expect(outputAmount.currency.equals(USDC)).toBe(true);
                expect(outputAmount.quotient).toEqual(JSBI.BigInt(98));
            }));
        });
        describe("#getInputAmount", () => {
            it("USDC -> DAI", () => __awaiter(void 0, void 0, void 0, function* () {
                const outputAmount = CurrencyAmount.fromRawAmount(DAI, 98);
                const [inputAmount] = yield pool.getInputAmount(outputAmount);
                expect(inputAmount.currency.equals(USDC)).toBe(true);
                expect(inputAmount.quotient).toEqual(JSBI.BigInt(100));
            }));
            it("DAI -> USDC", () => __awaiter(void 0, void 0, void 0, function* () {
                const outputAmount = CurrencyAmount.fromRawAmount(USDC, 98);
                const [inputAmount] = yield pool.getInputAmount(outputAmount);
                expect(inputAmount.currency.equals(DAI)).toBe(true);
                expect(inputAmount.quotient).toEqual(JSBI.BigInt(100));
            }));
        });
    });
    describe("#bigNums", () => {
        let pool;
        const bigNum1 = JSBI.add(JSBI.BigInt(Number.MAX_SAFE_INTEGER), JSBI.BigInt(1));
        const bigNum2 = JSBI.add(JSBI.BigInt(Number.MAX_SAFE_INTEGER), JSBI.BigInt(1));
        beforeEach(() => {
            pool = new Pool("xxxxxxxx", USDC, DAI, FeeAmount.LOW, encodeSqrtRatioX96(bigNum1, bigNum2), ONE_ETHER, 0, [
                {
                    index: nearestUsableTick(TickMath.MIN_TICK, TICK_SPACINGS[FeeAmount.LOW]),
                    liquidityNet: ONE_ETHER,
                    liquidityGross: ONE_ETHER,
                },
                {
                    index: nearestUsableTick(TickMath.MAX_TICK, TICK_SPACINGS[FeeAmount.LOW]),
                    liquidityNet: JSBI.multiply(ONE_ETHER, NEGATIVE_ONE),
                    liquidityGross: ONE_ETHER,
                },
            ]);
        });
        describe("#priceLimit", () => {
            it("correctly compares two BigIntegers", () => __awaiter(void 0, void 0, void 0, function* () {
                expect(bigNum1).toEqual(bigNum2);
            }));
            it("correctly handles two BigIntegers", () => __awaiter(void 0, void 0, void 0, function* () {
                const inputAmount = CurrencyAmount.fromRawAmount(USDC, 100);
                const [outputAmount] = yield pool.getOutputAmount(inputAmount);
                pool.getInputAmount(outputAmount);
                expect(outputAmount.currency.equals(DAI)).toBe(true);
                // if output is correct, function has succeeded
            }));
        });
    });
});
// # sourceMappingURL=pool.test.js.map