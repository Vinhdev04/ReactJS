import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
function ProductItem(props) {
  //TODO: get item from props
  const { item } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const handleAddToCart = () => {
    //TODO: Nếu sản phẩm đã có -> cập nhật số lượng
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      dispatch(updateQuantity(item.id));
    } else {
      dispatch(addToCart(item.id, item));
    }
    // console.log(cart);
  };

  return (
    <>
      <div className="product__item">
        <div className="product__img">
          <img src={item.thumbnail} alt={item.title} className="product__img" />
        </div>
        <div className="product__body">
          <h3 className="product__title">{item.title}</h3>
          <div className="product__detail">
            <p className="product__price--new"> Giá: {item.price}$</p>
            <p className="product__price--old">
              Giá:{" "}
              {(
                (item.price * Math.floor(100 - item.discountPercentage)) /
                100
              ).toFixed(3)}
              $
            </p>
          </div>
          <p className="product__info">
            <p className="product__branch">Số lượng:{item.stock}</p>
            Discount: {item.discountPercentage}%
          </p>
          <button className="btn btn-add" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
