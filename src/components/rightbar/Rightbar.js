import React from 'react'
import {List,Box, ListItem, ListItemAvatar,Typography,ListItemText,Avatar, Divider} from '@mui/material'
import postImage from "../../static/post.jpg"
import postImage1 from "../../static/post1.jpg"
import postImage2 from "../../static/post3.jpg"
import postImage3 from "../../static/post4.jpg"
import Card from '../card/Card'

const Rightbar = () => {
  return (
    <Box>
        <Typography align="center" bgcolor="black" color="white">
            Most Popular post
        </Typography>

    <List sx={{ width: '100%', height:"100%", maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" sx={{ height: 80, width:80 }} src={ postImage} />
      </ListItemAvatar>
      <ListItemText
        secondary={" — I'll be in your neighborhood doing errands this…"}
      />
    </ListItem>
    </List>

    <List sx={{ width: '100%', height:"100%", maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" sx={{ height: 80, width:80 }} src={ postImage1} />
      </ListItemAvatar>
      <ListItemText
        secondary={" — I'll be in your neighborhood doing errands this…"}
      />
    </ListItem>
    </List>
    <List sx={{ width: '100%', height:"100%", maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" sx={{ height: 80, width:80 }} src={ postImage2} />
      </ListItemAvatar>
      <ListItemText
        secondary={" — I'll be in your neighborhood doing errands this…"}
      />
    </ListItem>
    </List>

    <List sx={{ width: '100%', height:"100%", maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" sx={{ height: 80, width:80 }} src={ postImage3} />
      </ListItemAvatar>
      <ListItemText
        secondary={" — I'll be in your neighborhood doing errands this…"}
      />
    </ListItem>
    <Divider variant="inset" component={'li'}/>
    </List>
    <Typography align="center" bgcolor="black" color="white">
        About Us
    </Typography>
    <Card CardImage={postImage3}/>
    </Box>
  )
}

export default Rightbar