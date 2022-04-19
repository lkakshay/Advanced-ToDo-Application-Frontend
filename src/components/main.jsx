
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./main.css"
import { MenuList } from './menulist';



export const Main =()=>{
  return (
    <Box className='main' sx={{padding:"10px"}}>
      <Grid container  >
        <Grid item xs={3} >
            <Box sx={{height:"900px" ,padding:"20px",backgroundColor:"#1D5C63"}}>
              <MenuList/>
            </Box>
        </Grid>
        <Grid item xs={9} >
            <Box sx={{height:"900px",padding:"20px",backgroundColor:"#417D7A"}}>
              <div style={{backgroundColor:"#FFFBE7",margin:"20px",height:"50px"}}></div>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
