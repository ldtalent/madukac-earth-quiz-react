import React from 'react';
import ResponsiveAppBar from "./ResponsiveAppBar";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Facts from "../sources/facts.json"
import Data from "../sources/credits.json"
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import { autocompleteClasses } from '@mui/material';
const Learn = ()=> {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <div>
            <ResponsiveAppBar />
            {Facts && Facts.map(fact=>{
                return(
                    <Box sx={{ flexGrow: 1 }} key = {fact.id}>
      <Grid 
      container spacing={2}
     
     elevation={9}
     justifyContent="center"
     style={{ margin : 'auto' }}
      >
        
        <Grid item xs={8}>
          <Item>
          <Typography variant="h5" gutterBottom component="div" style={{ fontWeight: 600 }}>
        {fact.id}. {fact.title}
      </Typography>

          <Typography variant="body1" gutterBottom>
        {fact.content}
      </Typography>
          </Item>
        </Grid>
    
      </Grid>
      <br/>
      <br />
    </Box>
    
                )
            })}
            {Data && Data.map(credit=>{
                return(
                    <div>

<Grid container justifyContent="flex-end">
          <Item>
          <Typography variant="h5" gutterBottom component="div">
          The information above was gotten from the following sources
      </Typography>

          <Typography variant="body1" gutterBottom>
            {credit.First} <br />
                {credit.Second}<br />
                      {credit.Last}
      </Typography>
          </Item>
        </Grid>
    
     
                        
                    </div>
                )
            })}
        </div>
    )
}


export default Learn;