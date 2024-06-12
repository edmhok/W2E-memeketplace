import JSBI from "jsbi";
import { Fraction } from "../core";
export function formatCurrencyAmount(amount, sigFigs) {
    if (!amount)
        return "--";
    if (JSBI.equal(amount.quotient, JSBI.BigInt(0))) {
        return "0";
    }
    if (amount.divide(amount.decimalScale).lessThan(new Fraction(1, 100000))) {
        return "<0.00001";
    }
    return amount.toFixed(sigFigs ? (sigFigs > 8 ? 8 : sigFigs) : 4, { groupSeparator: "," });
}
export function formatPrice(price, sigFigs, format) {
    if (!price) {
        return "-";
    }
    if (parseFloat(price.toFixed(sigFigs)) < 0.0001) {
        return "<0.0001";
    }
    return price.toSignificant(sigFigs, format);
}
var Bound;
(function (Bound) {
    Bound["LOWER"] = "LOWER";
    Bound["UPPER"] = "UPPER";
})(Bound || (Bound = {}));
export function formatTickPrice(price, atLimit, direction, placeholder, format) {
    if (atLimit[direction]) {
        return direction === Bound.LOWER ? "0" : "∞";
    }
    if (!price && placeholder !== undefined) {
        return placeholder;
    }
    return formatPrice(price, 5, format);
}
//# sourceMappingURL=format.js.map