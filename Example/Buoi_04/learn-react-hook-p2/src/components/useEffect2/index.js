import "./UserEffect2.scss";
import { useEffect, useState } from "react";
// # use useEffect() not [dependency] -> alway update render -> callback -> call API
function UseEffect2() {
  const [data, setData] = useState([]);
  // # useEffect -> gọi API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products); // # data từ API luôn được cập nhật
      })
      .catch((error) => {
        console.log("Error" + error.message);
      });
    // # truyền vào [dependency] là mảng rỗng -> tránh callback và render lại giao diện
  }, []);
  console.log(data); // ban đầu in ra mảng rỗng

  return (
    <>
      <div className="product__list">
        {data.map((item) => (
          <div className="product__item" key={item.id}>
            <div className="product__image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="product__body">
              <h3 className="product__title">{item.title}</h3>
              <p className="product__price">Giá: {item.price}$</p>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
}
export default UseEffect2;
