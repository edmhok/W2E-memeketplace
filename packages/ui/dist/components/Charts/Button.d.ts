import { ReactNode } from "react";
import { BoxProps } from "@mui/material";
import { Override } from "@w2e/types";
export declare enum ChartView {
  TVL = 0,
  VOL = 1,
  PRICE = 2,
  FEES = 3,
  LIQUIDITY = 4,
  TRANSACTIONS = 5,
}
export type ChartViewButton = {
  label: string;
  key: ChartView;
};
export interface ChartToggleButtonProps {
  children: ReactNode;
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
}
export declare function ChartToggleButton({ children, active, onClick }: ChartToggleButtonProps): JSX.Element;
export type ChartToggleProps = Override<
  BoxProps,
  {
    setActiveChartView: (view: ChartView) => void;
    activeView: ChartView;
    chartViews: ChartViewButton[];
  }
>;
export declare function ChartToggle({
  setActiveChartView,
  activeView,
  chartViews,
  ...rest
}: ChartToggleProps): JSX.Element;
//# sourceMappingURL=Button.d.ts.map
