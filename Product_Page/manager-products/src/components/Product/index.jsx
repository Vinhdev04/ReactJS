import React, { useState } from "react";
import ModalProduct from "../ModalProduct";
import ProductList from "../ProductList/ProductList";
function Product(props) {
  const [reload, setReload] = useState(false);

  const handleRender = () => {
    setReload(!reload);
  };
  return (
    <>
      <h2 style={{ margin: "10px 20px" }}>List Products</h2>
      <ModalProduct onReload={handleRender} />
      <ProductList reload={reload} />
    </>
  );
}

export default Product;
