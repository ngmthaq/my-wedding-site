import { Box, Paper, styled } from "@mui/material";

export const ThirdSectionContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(20),
}));

export const MasonryItem = styled(Paper)(() => ({}));

export const MasonryImage = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  borderRadius: theme.shape.borderRadius,
}));
