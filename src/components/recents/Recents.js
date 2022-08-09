import React from 'react'
import {
    Box,
    Grid,} 
from "@mui/material"

import CardImage from "../../static/perfumes.jpg"
import Card from '../card/Card'




const Recents = () => {
  return (
    <Box>
        <Grid container rowSpacing={1} columnSpacing={1} >
            <Grid item >
                <Card CardImage={CardImage} /> 
            </Grid>
                

            <Grid item xs={6} >
                <Card CardImage={CardImage}/> 
            </Grid>

            <Grid item xs={6} >
                <Card CardImage={CardImage}/> 
            </Grid>

            <Grid item xs={6} >
                <Card CardImage={CardImage}/> 
            </Grid>

            <Grid item xs={6} >
                <Card CardImage={CardImage}/> 
            </Grid>
        </Grid>
    </Box>
  )
}

export default Recents