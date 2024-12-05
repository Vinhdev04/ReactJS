import "./Control.scss";
import { useState, useEffect } from "react";

function Control() {
  // Khai báo state để lưu trữ dữ liệu nhận được từ API (recipes, users, hoặc products)
  const [data, setData] = useState([]);

  // Khai báo state để theo dõi tab đang hoạt động (recipes, users, hoặc products)
  const [tabActive, setTabActive] = useState("recipes");

  // Biến cố định giới hạn số lượng mục hiển thị trên mỗi trang
  const limit = 20;

  // Khai báo state để theo dõi trang hiện tại
  const [currentPage, setCurrentPage] = useState(0);

  // Khai báo state để lưu số lượng trang
  const [numPage, setNumPage] = useState(0);

  // Khai báo state để lưu loading state (true nếu đang tải dữ liệu, false nếu đã tải xong)
  const [loading, setLoading] = useState(false);

  // Sử dụng useEffect để gọi API mỗi khi thay đổi tab hoặc trang
  useEffect(() => {
    setLoading(true); // Bắt đầu tải dữ liệu
    fetch(
      `https://dummyjson.com/${tabActive}?skip=${
        limit * currentPage
      }&limit=${limit}`
    )
      .then((respon) => {
        // Kiểm tra nếu response.ok (mã trạng thái HTTP 2xx)
        if (!respon.ok) {
          // Ném ra lỗi nếu mã trạng thái không thành công
          throw new Error(`API Error: ${respon.status} ${respon.statusText}`);
        }
        return respon.json();
      })
      .then((data) => {
        console.log(data.recipes);
        setData(data[tabActive]); // Cập nhật state data với dữ liệu từ API
        setNumPage(Math.ceil(data.total / limit)); // Cập nhật số lượng trang
        setLoading(false); // kết thúc tải dữ liệu
      })
      .catch((error) => {
        console.log("error: " + error.message);
        setLoading(false); // Đảm bảo set loading là false khi có lỗi
      });
    // Render lại khi tab hoặc trang thay đổi
  }, [tabActive, currentPage]);

  const handleTab = (e) => {
    setTabActive(e); // Cập nhật tabActive khi người dùng chọn tab
  };

  // Hàm xử lý phân trang
  const handlePagination = (e) => {
    setCurrentPage(e); // Cập nhật trang hiện tại
  };

  return (
    <>
      <div className="control">
        {/* Các tab để người dùng chọn */}
        <div className="control__item" onClick={() => handleTab("recipes")}>
          Recipes
        </div>
        <div className="control__item" onClick={() => handleTab("users")}>
          Users
        </div>
        <div className="control__item" onClick={() => handleTab("products")}>
          Products
        </div>
      </div>

      {/* Hiển thị nội dung của tab hiện tại */}
      <div className="tab__content">
        <div className={tabActive}>
          {/* Duyệt qua dữ liệu và hiển thị từng mục */}
          {data.map((item) => (
            <div className={`${tabActive}__item`} key={item.id}>
              <div className={`${tabActive}__item`}>
                {/* Hiển thị hình ảnh của mục (recipe, user, hoặc product) */}
                <img src={item.image || item.thumbnail} alt={item.name} />
              </div>
              <div className={`${tabActive}__info`}>
                {/* Hiển thị tên của mục tùy theo loại tab */}
                <p className={`${tabActive}__name`}>
                  {tabActive === "recipes"
                    ? item.name || "No Recipe Name"
                    : tabActive === "users"
                    ? `${item.firstName} ${item.lastName}` || "No UserName"
                    : item.title || "No Product Name"}
                </p>
                {/* Hiển thị thông tin bổ sung tùy theo loại tab */}
                <p className={`${tabActive}__time`}>
                  {tabActive === "recipes"
                    ? `${item.cookTimeMinutes} minutes` ||
                      "No cook time available"
                    : tabActive === "users"
                    ? `Gender: ${item.gender}` || "No gender available"
                    : `Price: ${item.price}$` || "No price available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phân trang */}
      <div className="pagination">
        {/* Duyệt qua số trang và hiển thị các nút phân trang */}
        {[...Array(numPage)].map((_, index) => (
          <li onClick={() => handlePagination(index)} key={index}>
            {index + 1}
          </li>
        ))}
      </div>
    </>
  );
}

export default Control;
