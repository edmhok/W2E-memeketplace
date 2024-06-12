import React, { ReactNode } from "react";
export type SelectMenuItemProps = {
    label: ReactNode;
    value: any;
    selectLabel?: ReactNode;
};
export type CustomLabelProps = {
    menu: SelectMenuItemProps;
};
export interface SelectProps {
    label?: string;
    value?: any;
    width?: number | string;
    onChange?: (value: any) => void;
    required?: boolean;
    menus?: SelectMenuItemProps[];
    maxWidth?: number;
    fullHeight?: boolean;
    disabled?: boolean;
    InputProps?: any;
    contained?: boolean;
    CustomNoData?: React.ReactNode;
    placeholder?: string;
    multiple?: boolean;
    menuMaxHeight?: string;
    search?: boolean;
    onSearch?: (search: string | undefined) => void;
    customLabel?: boolean;
}
export declare function Select({ label, value, onChange, required, menus, maxWidth, fullHeight, disabled, InputProps, contained, width, CustomNoData, multiple, menuMaxHeight, onSearch, search: hasSearch, customLabel, ...props }: SelectProps): JSX.Element;
//# sourceMappingURL=Select.d.ts.map