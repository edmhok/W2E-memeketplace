import _Decimal from "decimal.js-light";
import toFormat from "toformat";
var Rounding;
(function (Rounding) {
    Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
    Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
    Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding || (Rounding = {}));
const Decimal = toFormat(_Decimal);
const toSignificantRounding = {
    [Rounding.ROUND_DOWN]: Decimal.ROUND_DOWN,
    [Rounding.ROUND_HALF_UP]: Decimal.ROUND_HALF_UP,
    [Rounding.ROUND_UP]: Decimal.ROUND_UP,
};
export function toSignificant(num, significantDigits = 6, format = { groupSeparator: "" }, rounding = Rounding.ROUND_HALF_UP) {
    Decimal.set({
        precision: significantDigits + 1,
        rounding: toSignificantRounding[rounding],
    });
    const quotient = new Decimal(num).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
}
export function toSignificantWithGroupSeparator(num, significantDigits = 6) {
    Decimal.set({
        precision: significantDigits + 1,
        rounding: toSignificantRounding[Rounding.ROUND_DOWN],
    });
    const quotient = new Decimal(num).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), { groupSeparator: "," });
}
//# sourceMappingURL=toSignificant.js.map