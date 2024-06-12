import { Box } from "@mui/material";

export default function Background() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        pointerEvents: "none",
        transform: "unset",
        background: "linear-gradient(to right, rgba(128, 0, 128, 0.8), rgba(0, 0, 0, 1), rgba(0, 0, 128, 0.5))",
        width: "100vw",
        height: "100vh",
        zIndex: "-1",
      }}
    />
  );
}
