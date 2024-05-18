import React from 'react'
import { Typography,Grid,Button } from "@mui/material";
import { Divider } from '@material-ui/core';
const culture= "https://makersmarketplace.s3.us-west-1.amazonaws.com/istockphoto-1493227128-1024x1024.jpg"
import { useReducer } from 'react';
import cartReducer from '../Reducer/CartReducer';
import AppBarComponent from '../higherOrderComponent/AppBarComponent';
const ProductDetailsComponent=()=>{
    // const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

    // const handleAddToCart = (product) => {
    //   dispatch({ type: ADD_TO_CART, payload: product });
    // };

return(

    <React.Fragment>
        <AppBarComponent name={"PRODUCT DETAIL"}>

        </AppBarComponent>
        <Grid container direction="row" xs={12} style={{padding:8}}>
        <Grid item container xs={6}>
        <img src={culture} style={{width:500,height:300}}/>

            {/* <img src={product.image} style={{height:'100%',width:'100%'}}>
            </img> */}
        </Grid>
        <Grid item container xs={6} style={{padding:8}} direction="column">
            <Grid item style={{padding:8}}>
            <Typography variant="h6">
           Minicanvas
            </Typography>
            </Grid>
            <Grid item style={{padding:8}}>
            <Typography style={{color:"gray"}}>           
            Multicolored
            </Typography>
            </Grid>
            <Divider>

            </Divider>
            <Typography style={{padding:8}}>
               20
            </Typography>
            
            <Grid container direction="row" spacing={4} style={{padding:8}}>
                <Grid item >
                <Button variant="contained" style={{background:'#C9B79C'}} >
WISHLIST
                </Button>
                </Grid>
                <Grid item>
                <Button variant="contained" style={{background:'#C9B79C'}} >
ADD TO CART
                </Button>
                </Grid>
              
            </Grid>
            <Typography style={{color:"gray"}}>
            100% Original Products
            </Typography>
            <Typography style={{color:"gray"}}>
            Pay on delivery might be available
                </Typography>
<Typography style={{color:"gray"}}>
Easy 7 days returns and exchanges
            </Typography>
        </Grid>
    </Grid>
    </React.Fragment>
    
)
}

export default ProductDetailsComponent
