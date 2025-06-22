import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,

} from "@mui/material";
import Appbare from "Component/Appbare";
import MyList from "Component/List";
import { useMemo, useRef, useState } from "react";
import getDesignTokens from "styles/MyThemes";
import Posts from "Component/Posts";
import RightBar from "Component/RightBar";

function App() {
  
  const [mode, setmode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const [showList, setshowList] = useState("none");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [isOpen, setisOpen] = useState(false);
  const closeMenu = () => {
    setisOpen(false);
  };
  const inputElement = useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbare showList={showList} setshowList={setshowList} />
      <div className="App">
        <Stack direction={"row"}>
          <MyList setmode={setmode} theme={theme} showList={showList} setshowList={setshowList} />
          <Posts />
        <RightBar theme={theme}/>
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
