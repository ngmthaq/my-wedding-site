import { Container, styled } from "@mui/material";

export const WebContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
}));

export const PinImage = styled("img")(({ theme }) => ({
  width: 400,
  height: "auto",

  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));
