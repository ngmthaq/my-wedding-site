import { styled } from "@mui/material";

export const BankingQR = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  height: 280,

  [theme.breakpoints.down("lg")]: {
    height: 240,
  },

  [theme.breakpoints.down("md")]: {
    height: 360,
  },

  [theme.breakpoints.down("sm")]: {
    height: 400,
  },
}));
