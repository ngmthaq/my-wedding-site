import { Box, styled } from "@mui/material";

export const SecondSectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(32),
  paddingRight: theme.spacing(16),
  paddingBottom: theme.spacing(8),
  paddingLeft: theme.spacing(16),

  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export const Flower1 = styled("img")(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(20),
  left: theme.spacing(0),
  width: 160,
  height: "auto",

  [theme.breakpoints.down("md")]: {
    width: 100,
  },

  [theme.breakpoints.down("sm")]: {
    top: theme.spacing(15),
    right: theme.spacing(2),
    left: "unset",
  },
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

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const TimelineWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(4),
  },
}));
