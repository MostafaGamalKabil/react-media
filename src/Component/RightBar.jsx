import { Box, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const itemData = [
  {
    img: "https://images.pexels.com/photos/2884866/pexels-photo-2884866.jpeg",
    title: "place1",
  },
  {
    img: "https://images.pexels.com/photos/947185/pexels-photo-947185.jpeg",
    title: "place2",
  },
  {
    img: "https://images.pexels.com/photos/16115004/pexels-photo-16115004.jpeg",
    title: "place3",
  },
]; 
const showLG = {xs :"none" , lg:"block"} 
const RightBar = ({theme}) => {
  return (
    <Box   sx={{ display: showLG , flexGrow: "auto" , bgcolor:theme.palette.favColor.main , pl:2 }} component="section">
      <Typography sx={{ fontWeight: 300 }} mt={2} variant="h6">
        Online Friends
      </Typography>
      <AvatarGroup sx={{ justifyContent: "center", my: 2 }} total={24}>
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
        />
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Travis Howard"
          src="https://images.pexels.com/photos/32644651/pexels-photo-32644651.jpeg"
        />
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Agnes Walker"
          src="https://images.pexels.com/photos/32613549/pexels-photo-32613549.jpeg"
        />
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Trevor Henderson"
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
        />
      </AvatarGroup>

      <Typography sx={{ fontWeight: 300 }} my={2} variant="h6">
        Latest Photo
      </Typography>

      <ImageList
      gap={10}
        sx={{ width: 500, height: 160, overflowY: "hidden" }}
        cols={3}
        rowHeight={99}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
            style={{borderRadius:"5px"}}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Typography sx={{ fontWeight: 300 }} mb={1} mt={4} variant="h6">
        Latest Conversation
      </Typography>

      <List sx={{ width: "100%", maxWidth: 488, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/32652437/pexels-photo-32652437.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/32652835/pexels-photo-32652835.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/32652455/pexels-photo-32652455.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default RightBar;
