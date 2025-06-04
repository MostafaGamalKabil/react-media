import React from "react";

import { Typography, AppBar, Toolbar, Link, Avatar } from "@mui/material";

const Appbar = ({ drawerWidth }) => {
  return (
    <AppBar
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      position="static"
    >
      <Toolbar>
        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { fontSize: "16.5px" },
          }}
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
  );
};

export default Appbar;
