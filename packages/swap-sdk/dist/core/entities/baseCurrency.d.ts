/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */
export declare abstract class BaseCurrency {
    /**
     * Returns whether the currency is native to the chain and must be wrapped (e.g. Ether)
     */
    abstract readonly isNative: boolean;
    /**
     * Returns whether the currency is a token that is usable without wrapping
     */
    abstract readonly isToken: boolean;
    /**
     * The decimals used in representing currency amounts
     */
    readonly decimals: number;
    /**
     * The symbol of the currency, i.e. a short textual non-unique identifier
     */
    readonly symbol: string;
    /**
     * The name of the currency, i.e. a descriptive textual non-unique identifier
     */
    readonly name: string;
    readonly logo: string;
    readonly transFee: number;
    readonly standard: string;
    /**
     * Constructs an instance of the base class `BaseCurrency`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor({ decimals, symbol, name, logo, transFee, standard, }: {
        decimals: number;
        symbol: string;
        name: string;
        logo?: string;
        transFee?: number;
        standard: string;
    });
    /**
     * Returns whether this currency is functionally equivalent to the other currency
     * @param other the other currency
     */
    abstract equals(other: BaseCurrency): boolean;
}
//# sourceMappingURL=baseCurrency.d.ts.map