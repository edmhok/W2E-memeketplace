import invariant from "tiny-invariant";
/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */
export class BaseCurrency {
    /**
     * Constructs an instance of the base class `BaseCurrency`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    constructor({ decimals, symbol, name, logo, transFee, standard, }) {
        invariant(decimals >= 0 && decimals < 255 && Number.isInteger(decimals), "DECIMALS");
        this.decimals = decimals;
        this.symbol = symbol;
        this.name = name !== null && name !== void 0 ? name : "";
        this.logo = logo !== null && logo !== void 0 ? logo : "";
        this.transFee = transFee !== null && transFee !== void 0 ? transFee : 0;
        this.standard = standard;
    }
}
//# sourceMappingURL=baseCurrency.js.map