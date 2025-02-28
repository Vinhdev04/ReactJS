import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, updateQuantity } from "../../actions/cart";
function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const inputRef = useRef();

  //TODO: Xử lý khi tăng, giảm số lượng sản phẩm
  const handleUp = () => {
    dispatch(updateQuantity(item.id));
    inputRef.current.value = parseInt(inputRef.current.value) + 1;
  };

  const handleDown = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity(item.id, -1));
      inputRef.current.value = parseInt(inputRef.current.value) - 1;
    }
  };

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <>
      <div className="cart__item">
        <div className="cart__img">
          <img src={item.info.thumbnail} alt="" />
        </div>
        <div className="cart__body">
          <h5 className="cart__title">{item.info.title}</h5>
          <p className="cart__price--new">
            Giá mới:{" "}
            {(
              (item.info.price * (100 - item.info.discountPercentage)) /
              100
            ).toFixed(0)}
            $
          </p>
          <p className="cart__price--old">Giá cũ: {item.info.price}$</p>
        </div>
        <div className="cart__button">
          <button onClick={handleDown}>-</button>
          <input defaultValue={item.quantity} ref={inputRef} />
          <button onClick={handleUp}>+</button>
        </div>
        <button className="" onClick={handleDelete}>
          Xóa
        </button>
      </div>
    </>
  );
}

export default CartItem;
