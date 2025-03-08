import { Box, Grid2, styled, Typography } from "@mui/material";

export const ImageWrapper = styled(Grid2)(() => ({
  position: "relative",
}));

export const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: theme.shape.borderRadius,
}));

export const LeftFlowerImage = styled("img")(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(-8),
  left: theme.spacing(-10),
  width: 220,
  height: "auto",

  [theme.breakpoints.down("lg")]: {
    width: 110,
    top: theme.spacing(-2),
    left: theme.spacing(-3),
  },

  [theme.breakpoints.down("md")]: {
    width: 220,
    top: theme.spacing(-5),
    left: theme.spacing(-5),
  },

  [theme.breakpoints.down("sm")]: {
    width: 100,
    top: theme.spacing(-3),
    left: theme.spacing(-3),
  },
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(10),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    marginLeft: theme.spacing(0),
  },
}));

export const RightFlowerImage = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(-8),
  right: theme.spacing(-8),
  width: 200,
  height: "auto",

  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const MapText = styled(Typography)(({ theme }) => ({
  "& a": {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
}));

export const NameBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(10),
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    "& *": {
      fontSize: theme.typography.h3.fontSize + "!important",
    },
  },
}));

export const AddressBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    "& *": {
      fontSize: theme.typography.caption.fontSize + "!important",
    },

    "& span": {
      display: "none",
    },
  },
}));
