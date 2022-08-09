import React from 'react'
import { Box,Stack } from '@mui/material/'
import Hero from './../hero/Hero';
import { Container } from '@mui/system';
import Categories from '../category/Categories';
import Recents from './../recents/Recents';
import Rightbar from './../rightbar/Rightbar';

const Home = () => {
  return (
    <Box>
        <Hero/>

        <Container>
            <Categories />
            <hr/>
            <Stack direction={"row"} spacing={8} mt={8}>
                <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
                    <Recents/>
                </Box>

                <Box flex={1}>
                    <Rightbar/>
                </Box>
            </Stack>
        </Container>
    </Box>
  )
}

export default Home