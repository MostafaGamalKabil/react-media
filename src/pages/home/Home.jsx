import { Paper, Typography, IconButton, Box } from "@mui/material";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

const Home = () => {
  const [myData, setmyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmyData(data));
  }, [myData]);
  let totalPrice = 0
  return (
    <Box sx={{ mt: "33px" }}>
      {myData.map((item) => {
        totalPrice += item.price
        return (
          <Paper
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "366px",
              pt: "22px",
              pb: "7px",
              position: "relative",
              mb: "20px",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h5">
              {item.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontSize: "1.3em",
                fontWeight: "500",
                opacity: "0.8",
              }}
              variant="h5"
            >
              {`$${item.price}`}
            </Typography>
            <IconButton
              onClick={() => {
                fetch(`http://localhost:3100/mydata/${item.id}`, {
                  method: "DELETE",
                });
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <Close sx={{ fontSize: "18px" }} />
            </IconButton>
          </Paper>

          
        );
      })}
      <Typography mt="55px" textAlign="center" variant="h6">
        👉 You Spend ${totalPrice}
      </Typography>
    </Box>
  );
};

export default Home;
