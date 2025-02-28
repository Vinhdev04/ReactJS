import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
function ListCart(props) {
  const cart = useSelector((state) => state.cartReducer);
  return (
    <>
      <div className="cart">
        {cart.map((item) => (
          <CartItem item={item} key="item.id" />
        ))}
      </div>
    </>
  );
}

export default ListCart;
