import { useState } from "react";
import { useEffect } from "react";
import "./UseEffect3.scss";

function UseEffect3() {
  // update data
  const [data, setData] = useState([]);
  // phân trang
  const limit = 10; // default limit 10 product
  const [currentPage, setCurrentPage] = useState(0);
  const [numPage, setNumPage] = useState(0); // mặc định là 0 page

  // xử lý việc lick chuyển trang
  const handleClick = (e) => {
    console.log(e);
    setCurrentPage(e);
  };

  useEffect(() => {
    // # sử dụng limit * currenPage để render tới trang cần tới
    fetch(
      `https://dummyjson.com/products?skip=${
        limit * currentPage
      }&limit=${limit}`
    )
      .then((respon) => respon.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products); // cập nhật data
        setNumPage(Math.ceil(data.total / limit)); // phân trang
      })
      .catch((err) => console.log("Error: " + err));
    // # truyền tham số vào dependency mỗi lần pagination update -> call lại API
  }, [currentPage]);
  console.log(numPage);
  console.log([...Array(numPage)]); // tạo 1 mảng 10 phần tử -> [undefine,....]

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

      <ul className="pagination">
        {/* // tạo 1 mảng 10 phần tử -> [undefine,....] để sử dụng map() và lấy ra index -> làm index sử dụng cho pagination được render ra từ call API*/}
        {[...Array(numPage)].map((_, index) => (
          <li onClick={() => handleClick(index)} key={index}>
            {index + 1}
          </li>
        ))}
      </ul>
    </>
  );
}
export default UseEffect3;
