import React, { Dispatch, SetStateAction, ReactNode } from "react";
export type BarChartAltProps = {
    data: any[];
    color?: string | undefined;
    height?: number | undefined;
    minHeight?: number;
    setValue?: Dispatch<SetStateAction<number | undefined>>;
    setLabel?: Dispatch<SetStateAction<string | undefined>>;
    value?: number;
    label?: string;
    activeWindow?: "daily" | "weekly" | "monthly";
    topLeft?: ReactNode | undefined;
    topRight?: ReactNode | undefined;
    bottomLeft?: ReactNode | undefined;
    bottomRight?: ReactNode | undefined;
    tickFormat?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export declare function BarChartAlt({ data, color, setValue, setLabel, value, label, activeWindow, topLeft, topRight, bottomLeft, bottomRight, minHeight, tickFormat, ...rest }: BarChartAltProps): JSX.Element;
//# sourceMappingURL=alt.d.ts.map