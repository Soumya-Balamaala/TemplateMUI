import React from "react";
import {
  Typography,
  Avatar,
  Stack,
  Tooltip,
  Popover,
  Box,
} from "@mui/material";

//Component
import { HeaderStyle } from "../Styles/HeaderItems";
import { Background } from "../Styles/Reusable";
//Icons
import { FiBell, FiSettings } from "react-icons/fi";
//Assets
import ProfieImage from "../Assets/BussinessWomen.jpg";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <HeaderStyle>
      <Typography
        variant="h5"
        sx={{ color: "secondary1.main", fontWeight: "bold" }}
      >
        Welcome Soumya !
      </Typography>
      <Stack direction="row" spacing={3}>
        <Tooltip title="Notifications">
          <Background>
            <FiBell />
          </Background>
        </Tooltip>
        <Tooltip title="Settings">
          <Background>
            <FiSettings />
          </Background>
        </Tooltip>
        <Avatar alt="Soumya" src={ProfieImage} onClick={handleClick} />
      </Stack>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "bottom",
        }}
      >
        <Stack direction="column" spacing={1} sx={{ padding: 1 }}>
          <Typography variant="subtitle1">Soumya Balamaala</Typography>
          <Typography variant="caption">Admin</Typography>
        </Stack>
      </Popover>
    </HeaderStyle>
  );
}

export default Header;
