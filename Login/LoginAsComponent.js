import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Typography } from "@material-ui/core";
import BuyerComponent  from "./BuyerComponent";
import MakerComponent from './MakerComponent'
const LoginAsCompnent = ({user}) => {
const [userScreen,setUserScreen]=useState("")
  const handleClick=(event)=>{
    setUserScreen(event.target.id)
  }
 
    if(userScreen=="maker")
    {
      return<MakerComponent user={user}></MakerComponent>
    }
    else if(userScreen=="buyer")
    {
      return(<BuyerComponent user={user.email}> 
        </BuyerComponent>)
      
    }
   
    else
    return(
      <Grid container direction="column" spacing={4} justifyContent="center"
      alignItems="center" style={{display:'flex',minHeight: "100vh"}}>
        <Grid item >
          <Button id="maker"style={{background:'#C9B79C'}} variant="contained" onClick={handleClick}>Maker</Button>
        </Grid>
        <Grid item >
        <Typography>
          OR
        </Typography>
        </Grid>
        
        <Grid item>
          <Button id="buyer"style={{background:'#C9B79C'}} variant="contained" onClick={handleClick}>Buyer</Button>
        </Grid>
      </Grid>
    )
    

};

export default LoginAsCompnent;
