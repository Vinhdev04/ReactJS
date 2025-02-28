import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CartNumber(props) {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);

  //TODO: Handle sum totalNumber
  const totalNumber = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  // console.log(totalNumber);

  return (
    <>
      <Link to="/cart">
        <BiCartAlt />
      </Link>
      <span className="number">{totalNumber}</span>
    </>
  );
}

export default CartNumber;
