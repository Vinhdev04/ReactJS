import React from "react";
import { addToCart } from "../../actions/cart";

function ProductItem(props) {
  const { item } = props;
  const handleAddToCart = () => {
    // addToCart();
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
