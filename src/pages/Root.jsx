import React from "react";
import { Outlet } from "react-router-dom";

import Appbar from "MUI-Component/Appbar";
import Drawerr from "MUI-Component/Drawerr";
import { Box } from "@mui/material";
const drawerWidth = 240;
const Root = () => {
  return (
    <div>
      {/* AppBar */}
      <Appbar drawerWidth={drawerWidth} />

      {/* Drower */}

      <Drawerr drawerWidth={drawerWidth} />

      {/* بنستخدمها عشان نعرض المكون الاساسي 
     مع باقي المكونات اللي هروح لصفحتها(Root)
 */}
      <Box
      component="main"
        sx={{
          ml: `${drawerWidth}px`,
          display: "flex",
          justifyContent: "center",
          mt:"33px"
        }}
      
      >
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;
