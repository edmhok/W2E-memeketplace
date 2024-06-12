import { Token } from "../core/entities/token";
import { Price } from "../core/entities/fractions/price";
interface useInverterProps {
    priceLower: Price<Token, Token> | undefined;
    priceUpper: Price<Token, Token> | undefined;
    quote: Token | undefined;
    base: Token | undefined;
    invert: boolean;
}
export declare function useInverter({ priceLower, priceUpper, quote, base, invert }: useInverterProps): {
    priceUpper: Price<Token, Token>;
    priceLower: Price<Token, Token>;
    quote: Token;
    base: Token;
};
export {};
//# sourceMappingURL=invert.d.ts.map