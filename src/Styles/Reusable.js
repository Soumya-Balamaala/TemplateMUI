import { Box, Button, Stack } from "@mui/material";

import { styled } from "@mui/material/styles";

export const FlexCenter = styled(Box)(({ theme }) => ({
  fontFamily: theme.fontFamily,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
}));

export const Logo = styled(Stack)(({ theme }) => ({
  background: theme.palette.primary.main,
  position: "relative",
  top: -50,
}));

export const Background = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary2.main,
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: theme.fontFamily,
}));

export const ButtonComponent = styled(Button)(({ theme }) => ({
  width: 130,
  borderRadius: "20px",
  fontSize: "10px",
  fontWeight: "bold",
}));

export const Search = styled(Box)(({ theme }) => ({
  width: 200,
  height: 30,
  backgroundColor: theme.palette.secondary2.main,
  borderRadius: "20px",
  fontFamily: theme.fontFamily,
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
}));

export const Input = styled("input")(({ theme }) => ({
  width: "100%",
  height: "25px",
  border: "none",
  borderRadius: "20px",
  backgroundColor: "transparent",

  "&:focus": {
    outline: "none",
  },
}));
