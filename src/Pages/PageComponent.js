import React, { useContext } from "react";
//mui
import { Typography } from "@mui/material";
//localimports
import { FlexCenter } from "../Styles/Reusable";
import CommingSonn from "../Assets/UnderConstruction.jpg";

function PageComponent() {
  return (
    <FlexCenter>
      <img src={CommingSonn} alt="Commming soon" />
    </FlexCenter>
  );
}

export default PageComponent;
