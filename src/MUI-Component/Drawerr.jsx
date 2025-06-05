import {
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Drawerr = ({ drawerWidth, setDarkMode }) => {
  const currentLocation = useLocation()
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem sx={{ display: "flex", justifyContent: "center" , mb:"15px" }} disablePadding>
          <IconButton
            
            color="inherit"
            onClick={() => {
              localStorage.setItem("mode" , theme.palette.mode === "dark" ? "light" : "dark")
              setDarkMode(theme.palette.mode === "dark" ? "light" : "dark");
            }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>

          <Divider />

        <ListItem sx={{bgcolor: currentLocation.pathname === "/" ? theme.palette
// @ts-ignore
        .favColor.main : null}} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{bgcolor: currentLocation.pathname === "/create" ? theme.palette
// @ts-ignore
        .favColor.main : null}} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/create");
            }}
          >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
