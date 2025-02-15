import { Box, styled } from "@mui/material";

export const DrawerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100vw",
  height: "100vh",
}));

export const PlayAudioButtonContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: theme.zIndex.appBar,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
}));
