import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Container } from "@material-ui/core";
import {checkUserExists,authenticateUser} from '../actions/UserAction'
import DashboardComponent from "../dashboard/DashboardComponent";
import { RadioGroup, Radio, FormControlLabel, Grid, Typography } from "@mui/material";
import UploadComponent from '../Upload/UploadComponent'
import LoginComponent from "./LoginComponent";
import ProductListComponent from '../product/ProductListComponent'
import ProductDetailsComponent from "../product/ProductDetailsComponent";


const BuyerComponent = ({user}) => {
  return(
<ProductListComponent email={user}>

</ProductListComponent>
  )

};


export default BuyerComponent;




