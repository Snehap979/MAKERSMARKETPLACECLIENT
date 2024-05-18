import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Container } from "@material-ui/core";
import { RadioGroup, Radio, FormControlLabel, Grid, Typography } from "@mui/material";
import UploadComponent from "../Upload/UploadComponent";
import DashboardComponent from "../dashboard/DashboardComponent";
import { checkUserExists, authenticateUser } from '../actions/UserAction';
import AppBarComponent from "../higherOrderComponent/AppBarComponent";
import {saveMakerDetails} from "../actions/UserAction"
import ProductListComponent from '../maker/ProductListComponent'

const useStyles = makeStyles((theme) => ({
  formContainer: {    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "50%%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const MakerComponent = ({user}) => {
  const classes = useStyles(); // Define classes variable using makeStyles hook
  const categories = [
    "Handcrafted Goods/Jewelry/Home Decor",
    "Art & Prints",
    "Handmade Accessories/Scarves & Hats/Handbags",
    "Personalized Gifts",
    "DIY & Craft Supplies",
    "Natural & Organic Products",
    "Culinary Creations/Jams/Baked/Spices",
    "Vintage & Retro Finds",
    "Artisanal Beverages",
    "Wellness & Self-Care/Aromatherapy/Meditation"
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [navigate, setNavigation] = useState("false");
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    image:"",
    quantity:0,
    price:0,
    email:""

  });

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit",formData)
    formData.category=selectedCategory
    formData.image="https://makersmarketplace.s3.us-west-1.amazonaws.com/istockphoto-1493227128-1024x1024.jpg"
    formData.email=user.email
    let res=await saveMakerDetails(formData)
    console.log("res",res)
    if(res.status==200)
    {
      setNavigation("true")
    }
   
    // Your form submission logic here
  };
  const handleUploadResult = (result) => {
    // Handle the result of the upload operation here
    console.log("result",result)
    console.log("Upload result:", result);
    formData.image=result
    formData.image="https://makersmarketplace.s3.us-west-1.amazonaws.com/istockphoto-1493227128-1024x1024.jpg"
   
  };


  if (navigate === "true") {
    return <ProductListComponent user={formData}/>;
  } else {
    return (
      <React.Fragment>
        <AppBarComponent name="Maker">
        </AppBarComponent>
<Container component="main" maxWidth="xs">
        <div className={classes.formContainer}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="productName"
              label="Product Name"
              name="productName"
              autoComplete="productName"
              autoFocus
              value={formData.productName}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="quantity"
              label="Quantity"
              name="quantity"
              autoComplete="quantity"
              autoFocus
              value={formData.quantity}
              onChange={handleInputChange}
            />
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              autoComplete="price"
              autoFocus
              value={formData.price}
              onChange={handleInputChange}
            />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Select a category:</Typography>
              </Grid>
              <Grid item xs={12}>
                <RadioGroup value={selectedCategory} onChange={handleChange}>
                  {categories.map((category, index) => (
                    <FormControlLabel
                      key={index}
                      value={category}
                      control={<Radio />}
                      label={category}
                    />
                  ))}
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Selected Category: {selectedCategory}</Typography>
              </Grid>
            </Grid>

            <UploadComponent handleUploadResult={handleUploadResult} />

            <Button
              style={{ background: "#C9B79C" }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Start Shop
            </Button>
          </form>
        </div>
        <div></div>
      </Container>
      </React.Fragment>
      
    );
  }
};

export default MakerComponent;
