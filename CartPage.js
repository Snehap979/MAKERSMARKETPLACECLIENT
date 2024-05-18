import React from 'react';

function CartPage({ cartState }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartState.items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
