import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import { VolumeWindow } from "@w2e/constants";
export function SmallOptionButton({ active, children, onClick, }) {
    const theme = useTheme();
    return (_jsx(Typography, { onClick: onClick, color: "text.primary", component: "div", sx: {
            padding: "4px",
            minWidth: "36px",
            fontSize: "12px",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            background: active ? theme.colors.darkSecondaryDark : theme.palette.background.level3,
            cursor: "pointer",
        }, children: children }));
}
export function ChartDateButtons({ volume, onChange }) {
    const [volumeWindow, setVolumeWindow] = useState(VolumeWindow.daily);
    useEffect(() => {
        setVolumeWindow(volume);
    }, [volume]);
    const handleVolumeClick = (volumeWindow) => {
        onChange(volumeWindow);
    };
    return (_jsxs(Box, { sx: {
            display: "grid",
            columnGap: "8px",
            gridTemplateColumns: "repeat(3, 1fr)",
        }, children: [_jsx(SmallOptionButton, { active: volumeWindow === VolumeWindow.daily, onClick: () => handleVolumeClick(VolumeWindow.daily), children: "D" }), _jsx(SmallOptionButton, { active: volumeWindow === VolumeWindow.weekly, onClick: () => handleVolumeClick(VolumeWindow.weekly), children: "W" }), _jsx(SmallOptionButton, { active: volumeWindow === VolumeWindow.monthly, onClick: () => handleVolumeClick(VolumeWindow.monthly), children: "M" })] }));
}
//# sourceMappingURL=ChartDateButton.js.map