import { Typography, Box } from "@mui/material";
import { t } from "@lingui/macro";

type Item = {
  name: string;
  pageName: "token";
};

const DISPLAY_ITEMS: Item[] = [
  {
    name: t`Token`,
    pageName: "token",
  }
];

export default function WalletPageToggle() {


  return (
    <Box sx={{ display: "flex", gap: "0 24px", alignItems: "center" }}>
      {DISPLAY_ITEMS.map((item) => (
        <Typography
          key={item.pageName}
          variant="h3"
          color="textPrimary"
          onClick={() => (item)}
          sx={{ cursor: "pointer" }}
        >
          {item.name}
        </Typography>
      ))}
    </Box>
  );
}
