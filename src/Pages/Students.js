import { Paper, Stack, Box } from "@mui/material";
import React, { Fragment } from "react";
import { ButtonData } from "../Mock/Data";
import TableData from "../Components/TableData";
import { ButtonComponent, Search, Input } from "../Styles/Reusable";
import { FiSearch } from "react-icons/fi";

function Students() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: 2 }}
      >
        <Search>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              pading: 1,
              marginLeft: 2,
            }}
            alignItems="center"
            justifyContent="left"
          >
            <FiSearch />
            <Input type="text" placeholder="Search......" />
          </Stack>
        </Search>
        <Stack direction="row" spacing={1}>
          {ButtonData.map((item, index) => (
            <ButtonComponent
              key={index}
              variant={item.variant}
              startIcon={item.starticon}
              endIcon={item.endicon}
            >
              {item.title}
            </ButtonComponent>
          ))}
        </Stack>
      </Stack>
      <Box sx={{ padding: 5 }}>
        <TableData />
      </Box>
    </>
  );
}

export default Students;
