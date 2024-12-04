import { useEffect, useState } from "react";
import "./Products.scss";

function Products() {
  const limit = 5;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [numberPage, setPagination] = useState(0);

  const handleClick = (e) => {
    console.log(e);
    setCurrentPage(e);
  };

  useEffect(() => {
    fetch(
      ` https://fakestoreapi.com/products?skip=${
        currentPage * limit
      }&limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setPagination(Math.ceil(18 / limit));
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }, [currentPage]);
  console.log([...Array(numberPage)]);

  return (
    <>
      <div className="product__list">
        {data.map((item) => (
          <div className="product__item" key={item.id}>
            <div className="product__img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="product__body">
              <h4 className="product__title">{item.title}</h4>
              <p className="product__desc">{item.description}</p>
              <p className="product__price">Price: {item.price}$</p>
            </div>
          </div>
        ))}
      </div>

      <ul className="pagination">
        {[...Array(numberPage)].map((item, index) => {
          return (
            <li onClick={() => handleClick(index)} key={index}>
              {index + 1}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Products;
