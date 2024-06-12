import React, { Dispatch, SetStateAction, ReactNode } from "react";
export type BarChartProps = {
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
export declare function BarChart({ data, color, setValue, setLabel, topLeft, topRight, bottomLeft, bottomRight, height, minHeight, ...rest }: BarChartProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map