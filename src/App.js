import {
  createTheme,
  ThemeProvider,
  CssBaseline,
 
  Stack,
  Typography,

} from "@mui/material";
import Appbare from "Component/Appbare";
import MyList from "Component/List";
import { useMemo, useRef, useState } from "react";
import getDesignTokens from "styles/MyThemes";
import Posts from "Component/Posts";

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
 
    
    <Stack direction={"row"}>
       <MyList setmode={setmode} theme={theme}/>
       <Posts/>
        <Typography sx={{flexGrow:6,border:"2px solid blue"}} variant="body1">Box3</Typography>
    </Stack>


       

      </div>
    </ThemeProvider>
  );
}

export default App;
