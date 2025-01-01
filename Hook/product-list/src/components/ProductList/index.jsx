import React, { useState } from "react";
import CreateProduct from "../CreateProduct";
import Product from "../Product";
import "./style.css";

function ProductList(props) {
  const [reload, setReload] = useState(false);

  // rerender
  const handleReload = () => {
    setReload(!reload);
  };

  return (
    <div>
      <h1>DANH SÁCH SẢN PHẨM</h1>
      <CreateProduct onReload={handleReload} />
      <Product reload={reload} />
    </div>
  );
}

export default ProductList;
