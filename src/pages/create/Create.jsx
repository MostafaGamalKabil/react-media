import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Create.css";

import { purple } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
const Create = () => {
  const navegate = useNavigate();
  const [title, settitle] = useState("");
  const [titleError, settitleError] = useState(false);
  const [priceError, setpriceError] = useState(false);
  const [price, setprice] = useState(0);
  return (
    <Box autoComplete="off" component="form" sx={{ width: "380px" }}>
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
        error={titleError}
      />

      <TextField
        onChange={(eo) => {
          // @ts-ignore
          setprice(Number(eo.target.value));
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
        error={priceError}
        type="number"
      />

      <ColorButton
        onClick={() => {
          settitleError(true);
          setpriceError(true)
          if (title) {
            settitleError(true);
          }
          if (price) {
            setpriceError(true)
          }
          if (title.trim()) {
            fetch("http://localhost:3100/mydata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ title, price }),
            }).then(() => {
              navegate("/");
            });
          }
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
