/* eslint-disable @typescript-eslint/prefer-as-const */
import invariant from "tiny-invariant";
import { validateAndParseAddress } from "../utils/validateAndParseAddress";
import { BaseCurrency } from "./baseCurrency";
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends BaseCurrency {
    constructor({ address, decimals, symbol, name, logo, transFee, standard }) {
        super({
            decimals,
            symbol,
            name,
            logo,
            transFee,
            standard,
        });
        this.isNative = false;
        this.isToken = true;
        this.address = validateAndParseAddress(address);
    }
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same address.
     * @param other other token to compare
     */
    equals(other) {
        return other.isToken && this.address === other.address;
    }
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other) {
        invariant(this.address !== other.address, "ADDRESSES");
        return this.address.toLowerCase() < other.address.toLowerCase();
    }
    /**
     * Return this token, which does not need to be wrapped
     */
    get wrapped() {
        return this;
    }
}
//# sourceMappingURL=token.js.map