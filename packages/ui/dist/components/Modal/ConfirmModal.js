import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "@mui/material";
import { Modal } from "./Modal";
export function ConfirmModal({ title, open, text, onConfirm, onClose }) {
    return (_jsx(Modal, { open: open, title: title, showConfirm: true, confirmText: "Confirm", onConfirm: onConfirm, onClose: onClose, children: _jsx(Typography, { color: "text.primary", fontSize: "16px", children: text }) }));
}
//# sourceMappingURL=ConfirmModal.js.map