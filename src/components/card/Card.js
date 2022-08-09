import React from 'react'
import {Box, CardMedia, CardContent, Typography} from "@mui/material"

const Card = ({CardImage}) => {
  return (
    <Box >
        <CardMedia
                    component="img"
                    height="300px"
                    image={CardImage}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{}} gutterBottom variant="body1" align='center' component="div" color="tomato">
                        PERFUMES
                    </Typography>

                    <Typography gutterBottom variant="h5" align='center' component="div" >
                        Wearing this will make everyone love you
                    </Typography>
                    <Typography gutterBottom variant="body2" align='center' component="div" color="text.secondary">
                        It's women love
                    </Typography>
                    <Typography variant="body2"  align="center" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
      </CardContent>

    </Box>
  )
}

export default Card