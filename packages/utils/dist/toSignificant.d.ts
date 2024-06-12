declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare function toSignificant(num: number | string, significantDigits?: number, format?: object, rounding?: Rounding): string;
export declare function toSignificantWithGroupSeparator(num: number | string, significantDigits?: number): string;
export {};
//# sourceMappingURL=toSignificant.d.ts.map