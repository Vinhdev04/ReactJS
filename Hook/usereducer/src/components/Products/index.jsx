import React, { useEffect, useState } from "react";

// TODO: useState call API
function Products(props) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      // console.log(data.products);
      setProduct(data.products);
      setLoading(false);
    };
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);
  console.log(loading);
  console.log(product);

  return (
    <>
      {loading ? (
        <>Loading data.....</>
      ) : (
        <ul>
          {product.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Products;
