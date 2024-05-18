import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCart  from '../ShoppingCart';
export default function AppBarComponent(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#C9B79C'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 
          {props.name}        
          </Typography>
        {props.showShoppingCart}<ShoppingCart>
          </ShoppingCart>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}