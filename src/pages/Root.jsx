import React from "react";
import { Outlet } from "react-router-dom";
import { Typography, AppBar, Toolbar, Link, Avatar } from "@mui/material";

const Root = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link
            sx={{ flexGrow: 1, textDecoration: "none" }}
            color="inherit"
            href="/"
          >
            My expenses
          </Link>

          <Typography mr={2} variant="body2" component="div">
            Mostafa gamal
          </Typography>

          <Avatar alt="Remy Sharp" src="/static/images/avatar/photo.jpg" />
        </Toolbar>
      </AppBar>

      {/* بنستخدمها عشان نعرض المكون الاساسي 
     مع باقي المكونات اللي هروح لصفحتها(Root)
 */}
      <Outlet />
    </div>
  );
};

export default Root;
