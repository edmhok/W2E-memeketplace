import React, { Dispatch, SetStateAction, ReactNode } from "react";
export type LineChartAltProps = {
    data: any[];
    color?: string | undefined;
    height?: number | undefined;
    minHeight?: number;
    setValue?: Dispatch<SetStateAction<number | undefined>>;
    setLabel?: Dispatch<SetStateAction<string | undefined>>;
    value?: number;
    label?: string;
    topLeft?: ReactNode | undefined;
    topRight?: ReactNode | undefined;
    bottomLeft?: ReactNode | undefined;
    bottomRight?: ReactNode | undefined;
    tickFormat?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export declare function LineChartAlt({ data, color, value, label, setValue, setLabel, topLeft, topRight, bottomLeft, bottomRight, minHeight, tickFormat, ...rest }: LineChartAltProps): JSX.Element;
//# sourceMappingURL=alt.d.ts.map