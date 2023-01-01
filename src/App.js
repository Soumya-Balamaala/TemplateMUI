import React, { createContext, useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//mui
import { ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";

//Component
import { PCtheme } from "./Styles/Theme";
import PageComponent from "./Pages/PageComponent";
import Students from "./Pages/Students";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <ThemeProvider theme={PCtheme}>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Navbar />
        <Stack direction="column" sx={{ width: "100%" }}>
          <Header />
          <Routes>
            <Route path="/" element={<PageComponent />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<PageComponent />} />
            <Route path="/event" element={<PageComponent />} />
            <Route path="/finance" element={<PageComponent />} />
            <Route path="/food" element={<PageComponent />} />
            <Route path="/user" element={<PageComponent />} />
            <Route path="/chat" element={<PageComponent />} />
            <Route path="/lActivity" element={<PageComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
