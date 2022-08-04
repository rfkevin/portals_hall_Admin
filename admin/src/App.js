import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Home from "./Pages/Home/Home";
import Header from "./components/Headers/Header";
import News from "./Pages/News/News";
import "./App.css";
import AddNews from './Pages/News/AddNews';
const App = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box bgcolor="background" sx={{ display: "flex" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/addnews" element={<AddNews />} />
            </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
