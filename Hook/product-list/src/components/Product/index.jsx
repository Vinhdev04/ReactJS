import React, { useEffect, useState } from "react";
import { getProduct } from "../../API/product";
import DeleteProduct from "../DeleteProduct";
import EditProduct from "../EditProduct";
import "./style.css";
function Product(props) {
  const { reload } = props;
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);

  const handleReload = () => {
    setUpdate(!update);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      // import from API
      const result = await getProduct();
      setData(result.reverse());
    };
    fetchAPI();
  }, [reload, update]); // reload != reload  || update != update-> rerender API data
  // console.log(data);

  return (
    <div className="product__list">
      {data.map((item, idx) => (
        <div className="product__item" key={item.id}>
          <div className="product__img">
            <img src={item.thumbnail} alt={item.title} />
          </div>
          <div className="product__body">
            <div className="product__title">{item.title}</div>
            <div className="product__desc">{item.description}</div>
            <div className="product__info">
              <div className="product__price">
                <b>Giá</b>: {item.price}$
              </div>
              <div className="product__category">
                <b>Danh mục</b>: {item.category}
              </div>
            </div>
          </div>
          <div className="product__control">
            {/* <button className="btn btn-repair">Sửa</button> */}
            <EditProduct item={item} onReload={handleReload} />
            {/* <button className="btn btn-remove">Xóa</button> */}
            <DeleteProduct item={item} onReload={handleReload} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
