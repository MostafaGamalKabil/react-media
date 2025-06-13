import {
  createTheme,
  Button,
  ThemeProvider,
  CssBaseline,
  Menu,
  MenuItem,

} from "@mui/material";
import Appbare from "Component/Appbare";
import { useMemo, useRef, useState } from "react";
import getDesignTokens from "styles/MyThemes";

function App() {
  const [mode, setmode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );



  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [isOpen, setisOpen] = useState(false);
    const closeMenu = () => {
    setisOpen(false)
  }
  const inputElement = useRef(null)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbare/>
      <div className="App">
        <Button
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );

            setmode(theme.palette.mode === "light" ? "dark" : "light");
          }}
          variant="text"
          color="primary"
        >
          change mode
        </Button>

        <Button 
        ref={inputElement}
          onClick={() => {
            setisOpen(!isOpen);
          }}
          sx={{ ml: "199px" }}
          variant="contained"
        >
          Dashboard
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={inputElement.current}
          open={isOpen}
          onClose={closeMenu}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
        >
          <MenuItem onClick={closeMenu}>Profile</MenuItem>
          <MenuItem onClick={closeMenu}>My account</MenuItem>
          <MenuItem onClick={closeMenu}>Logout</MenuItem>
        </Menu>
      </div>
    </ThemeProvider>
  );
}

export default App;
