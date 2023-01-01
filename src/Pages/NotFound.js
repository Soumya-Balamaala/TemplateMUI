import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
//StyledComponents
import { FlexCenter } from "../Styles/Reusable";
import Error from "../Assets/NotFound.jpg";

function NotFound() {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/students");
  };
  return (
    <FlexCenter>
      <img src={Error} alt="NotFound" />
      <Button variant="contained" onClick={handleClick} sx={{ marginTop: 2 }}>
        Go to Students
      </Button>
    </FlexCenter>
  );
}

export default NotFound;
