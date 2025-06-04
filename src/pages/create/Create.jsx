import { Box, Button, InputAdornment, styled, TextField, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Create.css";

import React from "react";
import { purple } from "@mui/material/colors";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
const Create = () => {
  return (
    <Box component="form" sx={{ width: "380px" }} >
      <TextField
        fullWidth={true}
        label="With normal TextField"
        id="filled-start-adornment"
        sx={{ mt: "22px" , display:"block" }}
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
        fullWidth={true}
        label="With normal TextField"
        id="filled-start-adornment"
        sx={{ mt: "22px" , display:"block" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />

      <ColorButton sx={{mt:"22px"}} variant="contained">
      SUBMIT <KeyboardArrowRightIcon/>

      </ColorButton>
    </Box>
  );
};

export default Create;
