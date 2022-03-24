import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   console.log(cart);
  return (
    <div className="cart">
      <h1>Added Meals</h1>
      {cart.map((meal, index) => (
        <ul key={Math.random(index) * 100000}>
          <li>{meal}</li>
        </ul>
      ))}
    </div>
  );
};

export default Cart;
