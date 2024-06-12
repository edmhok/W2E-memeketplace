import React, { Dispatch, SetStateAction, ReactNode } from "react";
export type LineChartProps = {
    data: any[];
    color?: string | undefined;
    height?: number | undefined;
    minHeight?: number;
    setValue?: Dispatch<SetStateAction<number | undefined>>;
    setLabel?: Dispatch<SetStateAction<string | undefined>>;
    topLeft?: ReactNode | undefined;
    topRight?: ReactNode | undefined;
    bottomLeft?: ReactNode | undefined;
    bottomRight?: ReactNode | undefined;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const LineChart: ({ data, color, setValue, setLabel, topLeft, topRight, bottomLeft, bottomRight, height, minHeight, ...rest }: LineChartProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map