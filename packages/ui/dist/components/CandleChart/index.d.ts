import React, { Dispatch, SetStateAction, ReactNode } from "react";
export type CandleChartProps = {
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
    onHoverChange?: (data: any) => void;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const CandleChart: ({ data, color, setValue, setLabel, topLeft, topRight, bottomLeft, bottomRight, height, minHeight, onHoverChange, ...rest }: CandleChartProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map