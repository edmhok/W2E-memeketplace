import { Position } from "../entities/position";
export declare function getPriceOrderingFromPositionForUI(position: Position | undefined): {
    priceLower?: undefined;
    priceUpper?: undefined;
    quote?: undefined;
    base?: undefined;
} | {
    priceLower: import("..").Price<import("..").Token, import("..").Token>;
    priceUpper: import("..").Price<import("..").Token, import("..").Token>;
    quote: import("..").Token;
    base: import("..").Token;
};
//# sourceMappingURL=getPriceOrderingFromPositionForUI.d.ts.map