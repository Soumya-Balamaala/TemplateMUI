import { styled } from "@mui/material/styles";

export const HeaderStyle = styled("header")(({ theme }) => ({
  width: "180vh",
  // background: "blue",
  height: "10vh",
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 8,
  fontFamily: theme.fontFamily,
  boxShadow: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.primary.main,
}));
