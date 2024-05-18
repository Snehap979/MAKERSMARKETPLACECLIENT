import React from 'react';

function ProductDetailPage({ product, handleAddToCart }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetailPage;
