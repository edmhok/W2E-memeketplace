import BigNumber from "bignumber.js";
export function formatTokenAmount(amount, decimals = 8) {
    let _amount = amount;
    let _decimals = decimals;
    if (_amount !== 0 && !_amount)
        return new BigNumber(0);
    if (typeof _amount === "bigint")
        _amount = Number(_amount);
    if (typeof decimals === "bigint")
        _decimals = Number(_decimals);
    if (Number.isNaN(Number(amount)))
        return new BigNumber(_amount);
    return new BigNumber(_amount).multipliedBy(Math.pow(10, Number(_decimals)));
}
export function parseTokenAmount(amount, decimals = 8) {
    if (amount !== 0 && !amount)
        return new BigNumber(0);
    if (typeof amount === "bigint")
        amount = Number(amount);
    if (typeof decimals === "bigint")
        decimals = Number(decimals);
    if (Number.isNaN(Number(amount)))
        return new BigNumber(String(amount));
    return new BigNumber(String(amount)).dividedBy(Math.pow(10, Number(decimals)));
}
//# sourceMappingURL=tokenAmount.js.map