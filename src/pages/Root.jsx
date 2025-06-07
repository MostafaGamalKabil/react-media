import { useState } from "react";
import { Outlet } from "react-router-dom";

import Appbar from "MUI-Component/Appbar";
import Drawerr from "MUI-Component/Drawerr";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;
const Root = () => {
  const [DrawerType, setDrawerType] = useState("permanent");
  const [DarkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === null
      ? "light"
      : localStorage.getItem("mode") === "light"
      ? "light"
      : "dark"
  );

  // apeare and disapeare Drawer
  const [noneORblock, setnoneORblock] = useState("none");

  // Dark mode
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: DarkMode, // استخدام قيمة الحالة DarkMode
      // إضافة خاصية مخصصة (مثلاً favColor) بناءً على قيمة DarkMode
      favColor:
        DarkMode === "light" ? { main: grey[300] } : { main: grey[800] },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        {/* AppBar */}
        <Appbar
          drawerWidth={drawerWidth}
          setnoneORblock={setnoneORblock}
          setDrawerType={setDrawerType}
        />

        {/* Drower */}

        <Drawerr
          drawerWidth={drawerWidth}
          setDarkMode={setDarkMode}
          noneORblock={noneORblock}
          DrawerType={DrawerType}
          setnoneORblock={setnoneORblock}
          setDrawerType={setDrawerType}
        />

        {/* بنستخدمها عشان نعرض المكون الاساسي 
     مع باقي المكونات اللي هروح لصفحتها(Root)
 */}
        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
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
