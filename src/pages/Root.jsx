import { useState } from "react";
import { Outlet } from "react-router-dom";

import Appbar from "MUI-Component/Appbar";
import Drawerr from "MUI-Component/Drawerr";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
const drawerWidth = 240;

const Root = () => {
  const [DarkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === null
      ? "light"
      : localStorage.getItem("mode") === "light"
      ? "light"
      : "dark"
  );
  // Dark mode
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: DarkMode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        {/* AppBar */}
        <Appbar drawerWidth={drawerWidth} />

        {/* Drower */}

        <Drawerr drawerWidth={drawerWidth} setDarkMode={setDarkMode} />

        {/* بنستخدمها عشان نعرض المكون الاساسي 
     مع باقي المكونات اللي هروح لصفحتها(Root)
 */}
        <Box
          component="main"
          sx={{
            ml: `${drawerWidth}px`,
            display: "flex",
            justifyContent: "center",
            mt: "33px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
