import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const MainNav = styled(Box)(({ theme }) => ({
  width: "45vh",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary4.main,
  fontFamily: theme.fontFamily,
}));

export const Navlist = styled(Box)(({ theme }) => ({
  position: "relative",
  top: -20,
}));

export const NLink = styled(NavLink)(({ theme, isActive }) => ({
  textDecoration: "none",
  color: isActive ? theme.palette.primary.main : theme.palette.secondary4.main,
  display: "flex",
  alignItems: "center",
  justifycontent: "left",
  padding: 10,
  bgColor: isActive ? theme.palette.secondary4.main : "none",
}));
