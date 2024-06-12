export function useInverter({ priceLower, priceUpper, quote, base, invert }) {
    return {
        priceUpper: invert ? priceLower === null || priceLower === void 0 ? void 0 : priceLower.invert() : priceUpper,
        priceLower: invert ? priceUpper === null || priceUpper === void 0 ? void 0 : priceUpper.invert() : priceLower,
        quote: invert ? base : quote,
        base: invert ? quote : base,
    };
}
//# sourceMappingURL=invert.js.map