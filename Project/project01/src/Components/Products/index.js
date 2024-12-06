import "./Product.scss";
import { useState, useEffect } from "react";

function Products() {
  // TODO: Define state variables
  const limit = 10;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("recipes");
  const [searchValues, setSearchValues] = useState(""); // Đảm bảo searchValues là chuỗi rỗng, không phải undefined

  // TODO: Fetch data and update state
  useEffect(() => {
    fetch(
      `https://dummyjson.com/${currentCategory}?skip=${
        limit * currentPage
      }&limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data[currentCategory]);
        setTotalPagesCount(Math.ceil(data.total / limit)); // Cập nhật số trang
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [currentCategory, currentPage]);

  // TODO: Handle events
  const handlePagination = (e) => {
    setCurrentPage(e); // Cập nhật trang hiện tại
  };

  const handleTab = (e) => {
    setCurrentCategory(e); // Cập nhật category hiện tại
    setCurrentPage(0); // Về trang đầu khi chọn tab mới
  };

  const handleSearch = (e) => {
    setSearchValues(e.target.value); // Cập nhật giá trị tìm kiếm vào state
  };

  // TODO: Lọc dữ liệu theo giá trị tìm kiếm
  const filterData = data.filter((item) => {
    if (searchValues.trim() === "") {
      return true; // Trả về tất cả mục nếu không có giá trị tìm kiếm
    }
    if (currentCategory === "products") {
      return item.title?.toLowerCase().includes(searchValues.toLowerCase());
    } else if (currentCategory === "recipes") {
      return item.name?.toLowerCase().includes(searchValues.toLowerCase());
    } else if (currentCategory === "users") {
      const fullName = `${item.firstName} ${item.lastName}`;
      return fullName.toLowerCase().includes(searchValues.toLowerCase());
    }
    return false;
  });

  // TODO: Render data
  return (
    <>
      <div className="form">
        <h3>Search Data here</h3>
        <div className="form__control">
          <input
            type="text"
            placeholder="Enter your data"
            id="input-search"
            value={searchValues} // Lưu trữ giá trị tìm kiếm trong state
            onChange={handleSearch} // Cập nhật giá trị tìm kiếm khi người dùng thay đổi
          />
          <button id="search">Search</button>
        </div>
      </div>

      <select onChange={(e) => setCurrentCategory(e.target.value)}>
        <option value="recipes" onClick={() => handleTab("recipes")}>
          Default
        </option>
        <option value="recipes" onClick={() => handleTab("recipes")}>
          Food
        </option>
        <option value="products" onClick={() => handleTab("products")}>
          Product
        </option>
        <option value="users" onClick={() => handleTab("users")}>
          User
        </option>
      </select>

      <div className="list">
        {filterData
          .slice(currentPage * limit, (currentPage + 1) * limit)
          .map((item, index) => (
            <div className={`${currentCategory}__item`} key={index}>
              <div className={`${currentCategory}__img`}>
                <img src={item.image || item.thumbnail} alt="" />
              </div>
              <div className={`${currentCategory}__body`}>
                <h6 className={`${currentCategory}__desc`}>
                  {currentCategory === "products"
                    ? `Products: ${item.id}` || "Not found"
                    : currentCategory === "recipes"
                    ? `Categories: ${item.mealType}` || "Not found"
                    : currentCategory === "users"
                    ? `Gender: ${item.gender}` || "Not found"
                    : "not found"}
                </h6>
                <h4 className={`${currentCategory}__title`}>
                  {currentCategory === "recipes"
                    ? item.name || "Not found"
                    : currentCategory === "products"
                    ? item.title || "Not found"
                    : currentCategory === "users"
                    ? `${item.firstName} ${item.lastName}` || "Not found"
                    : "Not found"}
                </h4>
                <div className="wrapper">
                  <p className={`${currentCategory}__price`}>
                    {currentCategory === "products"
                      ? `Price: ${item.price}` || "Not found"
                      : currentCategory === "recipes"
                      ? `Price: ${
                          currentCategory === "recipes"
                            ? item.caloriesPerServing
                            : "Not found"
                        }`
                      : currentCategory === "users"
                      ? `Weight: ${item.weight}kg` || "Not found"
                      : ""}
                  </p>
                  <p className={`${currentCategory}__rating`}>
                    {currentCategory === "products"
                      ? `Discount: ${item.discountPercentage}%` || "Not found"
                      : currentCategory === "recipes"
                      ? `Rating: ${
                          currentCategory === "recipes"
                            ? item.rating
                            : "Not found"
                        }`
                      : currentCategory === "users"
                      ? `Height: ${item.height}cm` || "Not found"
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="pagination">
        {[...Array(totalPagesCount)].map((_, index) => (
          <button onClick={() => handlePagination(index)} key={index}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Products;
