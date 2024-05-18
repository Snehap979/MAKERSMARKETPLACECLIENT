// import React,{Component } from 'react';
import {  Route,BrowserRouter,Routes} from "react-router-dom";
import LoginComponent from './Login/LoginComponent';
import AppBarComponent from './higherOrderComponent/AppBarComponent'
import DashboardComponent from './dashboard/DashboardComponent';
import SignUpComponent from './SignUp/SignUpComponent';
import UploadComponent from './Upload/UploadComponent';
import ProductListComponent from './product/ProductListComponent'
import LoginAsComponent from './Login/LoginAsComponent'
import BuyerComponent from './Login/BuyerComponent'
import Dashboard from "./maker/Dashboard";
import React,{useReducer} from 'react';
import ProductDetailPage from './ProductDetailPage';
import CartPage from './CartPage';
import cartReducer from './cartReducer';
import ShoppingCart from './ShoppingCart'
import FolderList from "./maker/ProductListComponent";
import MakerComponent from "./Login/MakerComponent";
import bakery from './images/MAKERS.png'
import { TextField, Button, Container, Typography,Grid } from '@material-ui/core';

// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import { Route, HashRouter as Router, Routes } from "react-router-dom";

 
const App = () => {
   // return(
   //   <FolderList>
   //    </FolderList>
   //    // <ProductListComponent>
         
   //    // </ProductListComponent>
   // )
   return(
   //  <SignUpComponent>
      
   //  </SignUpComponent>
   <Grid style={{backgroundImage:`url(${bakery})`, backgroundSize: 'cover',
   backgroundPosition: 'center',minHeight: '100vh', }}>
  <LoginComponent>
      
      </LoginComponent>
   </Grid>
 

   )
}
//    // <LoginAsComponent>

//    // </LoginAsComponent>

//   )

// return(
//    <BuyerComponent>
      
//    </BuyerComponent>
// )







// const ADD_TO_CART = 'ADD_TO_CART';

// function App() {
//   const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

//   const handleAddToCart = (product) => {
//     dispatch({ type: ADD_TO_CART, payload: product });
//   };

//   return (
//     <div>
//       <ProductDetailPage product={{ id: 1, name: 'Product 1', description: 'Description of Product 1' }} handleAddToCart={handleAddToCart} />
//       <CartPage cartState={cartState} />
//       <ShoppingCart></ShoppingCart>
//     </div>
//   );
// }

export default App;
