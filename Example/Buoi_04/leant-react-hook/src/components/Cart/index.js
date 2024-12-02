import { useState } from "react";
import "./Cart.scss";
function Cart() {
  const priceDefault = 200000;
  // const quantity = 1;

  // # userState()
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    const updateQuantity = parseInt(e.target.value);
    setQuantity(updateQuantity);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giày Nike nam</td>
            <td>
              <input
                type="number"
                defaultValue={quantity}
                min={1}
                onChange={handleChange}
              />
            </td>
            <td>{priceDefault}đ</td>
            <td>{quantity * priceDefault}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default Cart;
