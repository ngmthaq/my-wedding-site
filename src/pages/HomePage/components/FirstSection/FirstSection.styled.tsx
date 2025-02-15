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
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(10),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
}));

export const RightFlowerImage = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(-8),
  right: theme.spacing(-8),
  width: 200,
  height: "auto",
}));

export const MapText = styled(Typography)(({ theme }) => ({
  "& a": {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
}));
