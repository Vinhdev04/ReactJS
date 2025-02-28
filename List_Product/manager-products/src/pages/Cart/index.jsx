import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../../actions/cart";
import "./Cart.css";
import ListCart from "./ListCart";
function Cart(props) {
  //TODO: lấy dữ liệu ra từ store
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);

  const dispatch = useDispatch();

  //TODO: Tính tổng tiền tất cả đơn hàng
  const total = cart.reduce((sum, item) => {
    const newPrice = (
      (item.info.price * (100 - item.info.discountPercentage)) /
      100
    ).toFixed(0);
    return sum + newPrice * item.quantity;
  }, 0);

  //TODO: Xóa hết sản phẩm trong giỏ hàng
  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };
  return (
    <>
      <div className="wrap__item">
        <h3 className="title">Giỏ Hàng</h3>
        <button className=" btn-delete" onClick={handleDeleteAll}>
          Xóa tất cả
        </button>
      </div>
      {cart.length > 0 ? (
        <>
          <ListCart />
          <div className="cart__total">
            <p>
              Tổng tiền: <span>{total.toFixed(2)}$</span>
            </p>
          </div>
        </>
      ) : (
        <>
          Hiện tại chưa có đơn hàng nào ở đây! Vui lòng quay lại tiếp tục mua
          sắm
        </>
      )}
    </>
  );
}

export default Cart;
