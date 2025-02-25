import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
function Product(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      });
  }, []);
  console.log(data);
  return (
    <>
      {data.length > 0 && (
        <div className="product__list">
          {data.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Product;
