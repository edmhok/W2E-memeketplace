import { TextFieldProps } from "@mui/material";
export type FilledTextFiledMenus = {
    label: string;
    value: any;
};
export interface FilledTextFieldProps {
    label?: string;
    value?: any;
    width?: string;
    onChange?: (value: any) => void;
    required?: boolean;
    menus?: FilledTextFiledMenus[];
    maxWidth?: number;
    fullHeight?: boolean;
    disabled?: boolean;
    InputProps?: any;
    contained?: boolean;
    alignCenter?: boolean;
    textFiledProps?: TextFieldProps;
}
export default function FilledTextField({ label, value, onChange, required, maxWidth, fullHeight, disabled, contained, alignCenter, width, textFiledProps, }: FilledTextFieldProps): JSX.Element;
//# sourceMappingURL=FilledTextField.d.ts.map