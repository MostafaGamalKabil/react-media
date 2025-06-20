import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import { Box, Checkbox, Menu, MenuItem } from "@mui/material";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

const Posts = () => {
  const myCard = [
    {
      letter: "M",
      color: "purple",
      userName: "mostafa",
      imgLink:
        "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg",
    },
    {
      letter: "S",
      color: "teal",
      userName: "Samy",
      imgLink:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg",
    },
    {
      letter: "G",
      color: "royalblue",
      userName: "Gamal",
      imgLink:
        "https://images.pexels.com/photos/2061212/pexels-photo-2061212.jpeg",
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 4 }}>
      {/*
      
      1- CardHeader
      2- CardMedia
      3- CardContent
      4- CardActions
      
      */}

      {myCard.map((item) => {
        return (
          <Card sx={{ maxWidth: 425, mx: "auto", my: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: item.color }}>{item.letter}</Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:"space-between"}} disableSpacing>
           <div>
               <Checkbox
                 icon={<FavoriteBorder />}
                 checkedIcon={<Favorite sx={{ color: "red" }} />}
               />
               <IconButton aria-label="share">
                 <ShareIcon />
               </IconButton>
           </div>

              <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
            </CardActions>
          </Card>
        );
      })}

      {renderMenu}
    </Box>
  );
};

export default Posts;
