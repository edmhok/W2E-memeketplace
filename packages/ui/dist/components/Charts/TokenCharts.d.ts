import { ChartView } from "./Button";

export declare const chartViews: {
  label: string;
  key: ChartView;
}[];
export type PriceToggle = {
  label: string;
  id: string;
};
export interface TokenChartsProps {
  canisterId: string | undefined;
  volume?: number;
  background?: number;
  borderRadius?: string;
  priceToggles?: PriceToggle[];
}
export declare function TokenCharts({
  canisterId,
  volume,
  borderRadius,
  priceToggles,
  background,
}: TokenChartsProps): JSX.Element;
// # sourceMappingURL=TokenCharts.d.ts.map
