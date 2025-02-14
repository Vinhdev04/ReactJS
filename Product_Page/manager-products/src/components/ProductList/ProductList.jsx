import React, { useEffect, useState } from "react";
import "./style.css";
function ProductList(props) {
  const { reload } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setData(data.reverse());
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAPI();
  }, [reload]);
  // console.log(data);

  return (
    <div className="products-list">
      {data.map((item, index) => (
        <div className="product-item" key={item.id}>
          <div className="product-img">
            <img src={item.thumbnail} alt={item.title} />
          </div>
          <div className="product-info">
            <h3 className="product-title">{item.title}</h3>
            <div className="product-subInfo">
              <p className="product-price">
                Price: <b>{item.price}$</b>
              </p>
              <p className="product-rating">
                Rating:<b> {item.rating}</b>
              </p>
            </div>
          </div>
          <div className="control">
            <button id="btnAdd" className="btn btn-add">
              Edit
            </button>
            <button id="btnRemove" className="btn btn-remove">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
