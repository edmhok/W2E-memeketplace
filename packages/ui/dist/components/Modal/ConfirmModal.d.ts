import React from "react";
export interface ConfirmModalProps {
    title: string | React.ReactNode;
    showClose?: boolean;
    open: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    text: string;
}
export declare function ConfirmModal({ title, open, text, onConfirm, onClose }: ConfirmModalProps): JSX.Element;
//# sourceMappingURL=ConfirmModal.d.ts.map