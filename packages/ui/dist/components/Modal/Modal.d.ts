import React, { ReactNode } from "react";

export interface ModalProps {
  title?: string | React.ReactNode;
  showClose?: boolean;
  children: React.ReactNode;
  open: boolean;
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  showConfirm?: boolean;
  showCancel?: boolean;
  confirmDisabled?: boolean;
  fullWidth?: boolean;
  maxWidth?: string;
  dialogProps?: any;
  type?: string;
  background?: string;
  [key: string]: any;
}
export declare function Modal({
  title,
  children,
  open,
  confirmText,
  cancelText,
  onClose,
  onConfirm,
  onCancel,
  showConfirm,
  showCancel,
  showClose,
  confirmDisabled,
  fullWidth,
  maxWidth,
  type,
  background,
  dialogProps,
}: ModalProps): JSX.Element;
// # sourceMappingURL=Modal.d.ts.map
