import { Percent } from "@w2e/swap-sdk";

export default function FormattedPriceImpact({ priceImpact }: { priceImpact: Percent | undefined }) {
  return priceImpact ? `${priceImpact.multiply(-1).toFixed(2)}%` : "0.00%";
}
