import React from "react";
export interface CopyProps {
    content: string | undefined;
    children: React.ReactChild;
    hide?: boolean;
    onCopy?: () => void;
}
export declare const Copy: React.ForwardRefExoticComponent<CopyProps & React.RefAttributes<unknown>>;
//# sourceMappingURL=Copy.d.ts.map