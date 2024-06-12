import { ReactNode } from "react";
import { VolumeWindow } from "@w2e/constants";
export declare function SmallOptionButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode | ReactNode[];
  onClick: () => void;
}): JSX.Element;
export interface ChartDateButtonsProps {
  volume: VolumeWindow;
  onChange: (volume: VolumeWindow) => void;
}
export declare function ChartDateButtons({ volume, onChange }: ChartDateButtonsProps): JSX.Element;
//# sourceMappingURL=ChartDateButton.d.ts.map
