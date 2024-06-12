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
import { TickListDataProvider } from "./tickListDataProvider";
describe("TickListDataProvider", () => {
    describe("constructor", () => {
        it("can take an empty list of ticks", () => {
            new TickListDataProvider([], 1);
        });
        it("throws for 0 tick spacing", () => {
            expect(() => new TickListDataProvider([], 0)).toThrow("TICK_SPACING_NONZERO");
        });
        it("throws for uneven tick list", () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(() => new TickListDataProvider([
                { index: -1, liquidityNet: -1, liquidityGross: 1 },
                { index: 1, liquidityNet: 2, liquidityGross: 1 }
            ], 1)).toThrow("ZERO_NET");
        }));
    });
    describe("#getTick", () => {
        it("throws if tick not in list", () => __awaiter(void 0, void 0, void 0, function* () {
            const provider = new TickListDataProvider([
                { index: -1, liquidityNet: -1, liquidityGross: 1 },
                { index: 1, liquidityNet: 1, liquidityGross: 1 }
            ], 1);
            yield expect(provider.getTick(0)).rejects.toThrow("NOT_CONTAINED");
        }));
        it("gets the smallest tick from the list", () => __awaiter(void 0, void 0, void 0, function* () {
            const provider = new TickListDataProvider([
                { index: -1, liquidityNet: -1, liquidityGross: 1 },
                { index: 1, liquidityNet: 1, liquidityGross: 1 }
            ], 1);
            const { liquidityNet, liquidityGross } = yield provider.getTick(-1);
            expect(liquidityNet).toEqual(JSBI.BigInt(-1));
            expect(liquidityGross).toEqual(JSBI.BigInt(1));
        }));
        it("gets the largest tick from the list", () => __awaiter(void 0, void 0, void 0, function* () {
            const provider = new TickListDataProvider([
                { index: -1, liquidityNet: -1, liquidityGross: 1 },
                { index: 1, liquidityNet: 1, liquidityGross: 1 }
            ], 1);
            const { liquidityNet, liquidityGross } = yield provider.getTick(1);
            expect(liquidityNet).toEqual(JSBI.BigInt(1));
            expect(liquidityGross).toEqual(JSBI.BigInt(1));
        }));
    });
});
//# sourceMappingURL=tickListDataProvider.test.js.map