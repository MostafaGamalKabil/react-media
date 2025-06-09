import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Create.css";

import { purple } from "@mui/material/colors";
import { useState } from "react";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  return (
    <Box component="form" sx={{ width: "380px" }}>
      <TextField
        onChange={(eo) => {
          settitle(eo.target.value);
        }}
        fullWidth={true}
        label="Transaction Title"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">👉</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />

      <TextField
        onChange={(eo) => {
          // @ts-ignore
          setprice(Number((eo.target.value)));
        }}
        fullWidth={true}
        label="Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />

      <ColorButton
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({title , price}),
          });
        }}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        SUBMIT <KeyboardArrowRightIcon />
      </ColorButton>
    </Box>
  );
};

export default Create;
