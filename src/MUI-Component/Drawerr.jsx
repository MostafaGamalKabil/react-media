import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Person,
  Settings,
} from "@mui/icons-material";

const Drawerr = ({
  drawerWidth,
  setDarkMode,
  noneORblock,
  DrawerType,
  setnoneORblock,
  setDrawerType,
}) => {
  const currentLocation = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();

  const drawerList = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Create", icon: <Create />, path: "/create" },
    { text: "Profile", icon: <Person />, path: "/profile" },
    { text: "Settings", icon: <Settings />, path: "/settings" },
  ];

  return (
    <Drawer
      sx={{
        display: { xs: noneORblock, sm: "block" },
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={DrawerType}
      anchor="left"
      open={true}
      onClose={() => {
        setnoneORblock("none");
        setDrawerType("permanent");
      }}
    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", mb: "15px" }}
          disablePadding
        >
          <IconButton
            color="inherit"
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
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

        {drawerList.map((item) => {
          return (
            <ListItem
              sx={{
                bgcolor:
                  currentLocation.pathname === (item.path)
                    ? // @ts-ignore
                      theme.palette.favColor.main
                    : null,
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
