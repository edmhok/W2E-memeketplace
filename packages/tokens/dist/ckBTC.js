import { Token } from "@w2e/swap-sdk";
import { TOKEN_STANDARD } from "@w2e/constants";
export const ck_BTC_TOKEN_INFO = {
    standardType: TOKEN_STANDARD.ICRC2,
    name: "ckBTC",
    decimals: 8,
    symbol: "ckBTC",
    canisterId: "mxzaz-hqaaa-aaaar-qaada-cai",
    totalSupply: BigInt(0),
    transFee: BigInt(10),
    logo: "",
};
export const ckBTC = new Token({
    address: ck_BTC_TOKEN_INFO.canisterId,
    decimals: ck_BTC_TOKEN_INFO.decimals,
    symbol: ck_BTC_TOKEN_INFO.symbol,
    name: ck_BTC_TOKEN_INFO.name,
    logo: ck_BTC_TOKEN_INFO.logo,
    standard: TOKEN_STANDARD.ICRC1,
    transFee: Number(ck_BTC_TOKEN_INFO.transFee),
});
//# sourceMappingURL=ckBTC.js.map