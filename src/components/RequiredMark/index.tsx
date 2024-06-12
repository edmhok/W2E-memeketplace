import { Typography } from "@mui/material";

export default function RequiredMark() {
  return (
    <Typography
      sx={{
        color: "#4fdb9a",
      }}
      component="span"
    >
      *
    </Typography>
  );
}
