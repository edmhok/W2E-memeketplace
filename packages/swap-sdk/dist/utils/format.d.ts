import { Price, Token, CurrencyAmount } from "../core";
export declare function formatCurrencyAmount(amount: CurrencyAmount<Token> | undefined, sigFigs: number): string;
export declare function formatPrice(price: Price<Token, Token> | undefined, sigFigs: number, format?: object): string;
declare enum Bound {
    LOWER = "LOWER",
    UPPER = "UPPER"
}
export declare function formatTickPrice(price: Price<Token, Token> | undefined, atLimit: {
    [bound in Bound]?: boolean | undefined;
}, direction: Bound, placeholder?: string, format?: object): string;
export {};
//# sourceMappingURL=format.d.ts.map