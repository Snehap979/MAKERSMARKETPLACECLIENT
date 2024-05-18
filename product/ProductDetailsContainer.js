
import React,{useReducer} from 'react';
import CartPage from '../CartPage';
import cartReducer from '../Reducer/CartReducer';
import ShoppingCart from '../ShoppingCart'
import AppBarComponent from '../higherOrderComponent/AppBarComponent';
import ProductDetailsComponent from './ProductDetailsComponent';
const ADD_TO_CART = 'ADD_TO_CART';

function ProductDetailsContainer({product}) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const handleAddToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  return (
    <div>
        <AppBarComponent name="PRODUCT DETAILS"></AppBarComponent>
      <ProductDetailsComponent product={product} handleAddToCart={handleAddToCart} />
      <CartPage cartState={cartState} />
     
    </div>
  );
}

export default ProductDetailsContainer;
