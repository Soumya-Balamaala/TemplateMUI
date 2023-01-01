import React from "react";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  IconButton,
  TablePagination,
  Paper,
  Stack,
  Typography,
  Avatar,
  Popover,
  Tooltip,
  Button,
  Box,
} from "@mui/material";
import {
  TableHeaderData,
  TableData1,
  ConatctData,
  ActionsData,
} from "../Mock/TableData";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Background } from "../Styles/Reusable";

function TableData() {
  // -------------------------------------------------------------------------------- Pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - TableData1.length) : 0;

  // -------------------------------------------------------------------------------- PopOver

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // -------------------------------------------------- Conditional Styling
  const backgroundStyle = (grade) => {
    if (grade === "VIIA") {
      return "#0b4029";
    } else if (grade === "VIIB") {
      return "#44577a";
    } else return "#1baa5a";
  };

  // --------------------------
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {TableHeaderData.map((item, index) => (
              <TableCell
                key={index}
                align={item.align}
                sx={{ fontWeight: "bold" }}
              >
                {item.title}
              </TableCell>
            ))}
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData1.length === 0 ? (
            <Typography variant="subtitle1" sx={{ p: 2 }}>
              No Data Available
            </Typography>
          ) : (
            (rowsPerPage > 0
              ? TableData1.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : TableData1
            ).map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Avatar alt={item.title} src={item.profile} />
                </TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.date}</TableCell>
                <TableCell align="center">{item.parent}</TableCell>
                <TableCell align="center">{item.city}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={2}>
                    {ConatctData.map((item, index) => (
                      <Background key={index}>
                        <Tooltip title={item.title}>
                          <IconButton
                            sx={{ color: "primary.main", fontSize: "16px" }}
                          >
                            {item.Icon}
                          </IconButton>
                        </Tooltip>
                      </Background>
                    ))}
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      width: 50,
                      textAligned: "center",
                      padding: 1,
                      borderRadius: "20px",
                      backgroundColor: backgroundStyle(item.grade),
                      color: "secondary4.main",
                    }}
                  >
                    {item.grade}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={handleClick}>
                    <BiDotsHorizontalRounded />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[4]}
        component="div"
        count={TableData1.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
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
          {ActionsData.map((item, index) => (
            <Button key={index} startIcon={item.Icon} onClick={handleClose}>
              {item.title}
            </Button>
          ))}
        </Stack>
      </Popover>
    </TableContainer>
  );
}

export default TableData;
