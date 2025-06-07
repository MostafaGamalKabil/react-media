

import { Typography, AppBar, Toolbar, Link, Avatar, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Appbar = ({ drawerWidth , setnoneORblock , setDrawerType }) => {
  
  return (
    <AppBar
      sx={{ width: {sm: `calc(100% - ${drawerWidth}px)`}, ml: {sm: `${drawerWidth}px` , xs : 0} }}
      position="static"
    >
      <Toolbar>
        <IconButton onClick={() => {
          setDrawerType("temporary")
          setnoneORblock("block")
        }} sx={{mr:"10px" , display : {sm:"none"}}} >
          <Menu/>
        </IconButton>
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
