import { Box, styled } from "@mui/material";

export const SecondSectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(32),
  paddingRight: theme.spacing(16),
  paddingBottom: theme.spacing(8),
  paddingLeft: theme.spacing(16),
}));

export const Flower1 = styled("img")(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(20),
  left: theme.spacing(0),
  width: 160,
  height: "auto",
}));

export const Flower2 = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(0),
  left: theme.spacing(0),
  width: 100,
  height: "auto",
}));

export const Flower3 = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "60%",
  right: theme.spacing(0),
  width: 100,
  height: "auto",
}));
