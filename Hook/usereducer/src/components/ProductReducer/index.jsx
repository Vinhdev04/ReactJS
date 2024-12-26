import React, { useEffect, useReducer } from "react";

// # init value
const initValue = {
  products: [], // <-> useState([])
  loading: true, // <-> useState(true)
};

// # function reducer
const getData = (state, action) => {
  console.log(state, action);
  if (action.type === "SUCCESS") {
    return {
      products: action.products,
      loading: false,
    };
  }
  return state;
};

function ProductReducer(props) {
  // TODO: useReducer() call API
  const [data, setData] = useReducer(getData, initValue);

  // TODO: useEffect() call API after 3s and update state with API data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData({
        products: data.products,
        type: "SUCCESS",
      });
    };
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);
  console.log(data);

  return (
    <>
      {data.loading ? (
        <>Loading data.....</>
      ) : (
        <ul>
          {data.products.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductReducer;
