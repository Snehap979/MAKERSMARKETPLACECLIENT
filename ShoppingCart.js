import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function ShoppingCart() {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent color="white">
        <ShoppingCartIcon style={{color:'white'}}/>
      </Badge>
    </IconButton>
  );
}
