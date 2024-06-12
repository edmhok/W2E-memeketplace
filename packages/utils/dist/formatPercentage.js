import { BigNumber } from "./bignumber";
export const formatPercentage = (value, options) => {
    const { fraction = 3 } = options || {};
    return `${new BigNumber(value * 100).toFixed(fraction)}%`;
};
//# sourceMappingURL=formatPercentage.js.map