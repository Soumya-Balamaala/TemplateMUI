import React from "react";
// mui
import { Stack, Typography, Box, Avatar } from "@mui/material";
//Styled
import { MainNav, Navlist } from "../Styles/Nav";
import { NavData } from "../Mock/Data";
import { NavLink } from "react-router-dom";
import { Logo } from "../Styles/Reusable";

function Navbar() {
  const ActiveStyle = {
    textDecoration: "none",
    color: "#0b4029",
    display: "flex",
    alignItems: "center",
    justifycontent: "left",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: "15px",
  };

  const NormalStyle = {
    textDecoration: "none",
    color: "#f8f8f8",
    display: "flex",
    alignItems: "center",
    justifycontent: "left",
    padding: 10,
    backgroundColor: "#0b4029",
  };

  return (
    <MainNav>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo direction="row" spacing={1}>
          <Typography
            variant="h5"
            sx={{
              backgroundColor: "secondary2.main",
              color: "primary.main",
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15px",
            }}
          >
            A
          </Typography>
          <Typography variant="h5" sx={{ position: "relative", top: 8 }}>
            Akademi
          </Typography>
        </Logo>
        <Navlist>
          {NavData.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              style={({ isActive }) => (isActive ? ActiveStyle : NormalStyle)}
            >
              <i style={{ paddingRight: "25px", marginTop: "5px" }}>
                {item.icon}
              </i>
              <Typography variant="subtitle">{item.title}</Typography>
            </NavLink>
          ))}
        </Navlist>

        <Typography variant="caption" sx={{ fontSize: "10px", marginTop: 2 }}>
          Akademi - School Addmission Dashboard
        </Typography>
      </Stack>
    </MainNav>
  );
}

export default Navbar;
