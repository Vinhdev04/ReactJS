import React, { useEffect, useState } from "react";
import "./style.css";

function ListFood(props) {
  const limit = 10; // number of recipes per page
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]); // lưu dữ liệu gốc từ API
  const [filteredData, setFilteredData] = useState([]); // dữ liệu sau khi lọc
  const [total, setTotal] = useState(0);
  const [pageNum, setPageNum] = useState(1); // current page number
  const [active, setActive] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Lưu trữ giá trị tìm kiếm

  // Toggle the visibility of recipes
  const handleShowHide = () => {
    setActive(!active);
  };

  // Set the page number when pagination item is clicked
  const handlePagiNumber = (e) => {
    const page = Number(e.target.dataset.page);
    setPageNum(page);
  };

  // Cập nhật giá trị tìm kiếm khi người dùng nhập vào input
  const handleFilterData = (e) => {
    setSearchQuery(e.target.value); // Cập nhật giá trị tìm kiếm
  };

  // Fetch data from the API and handle filtering all in one useEffect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes?limit=${limit}&skip=${
            (pageNum - 1) * limit
          }`
        );
        const data = await response.json();
        setData(data.recipes); // Cập nhật dữ liệu gốc
        setTotal(data.total); // Tổng số món ăn
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNum]); // Fetch data whenever pageNum changes

  // Xử lý việc lọc dữ liệu khi có thay đổi trong data hoặc searchQuery
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(data); // Nếu không có tìm kiếm, hiển thị tất cả dữ liệu
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered); // Cập nhật dữ liệu đã lọc
    }
  }, [data, searchQuery]); // Lọc lại dữ liệu khi data hoặc searchQuery thay đổi

  // Calculate the total number of pages
  const totalPages = Math.ceil(total / limit);

  // Hàm xử lý sự kiện khi người dùng nhấn nút "Search"
  const handleSearchClick = () => {
    // Lọc dữ liệu dựa trên searchQuery
    if (searchQuery.trim() !== "") {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered); // Cập nhật filteredData sau khi tìm kiếm
    } else {
      setFilteredData(data); // Nếu không có giá trị tìm kiếm, hiển thị tất cả
    }
  };

  return (
    <>
      <h1>List recipes in API</h1>
      <div className="block">
        <div className="control">
          <button className="btn" onClick={handleShowHide}>
            {active ? "Hide Recipes" : "Show Recipes"}
          </button>
        </div>
        <div className="filter">
          <input
            type="text"
            placeholder="Enter your recipe..."
            onChange={handleFilterData} // Cập nhật giá trị tìm kiếm khi gõ
            value={searchQuery} // Liên kết giá trị input với state searchQuery
            required
          />
          <button className="btn" onClick={handleSearchClick}>
            Search
          </button>{" "}
        </div>
      </div>
      <div className="wrapper">
        <div className="recipe">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {active &&
            filteredData.map((recipe) => (
              <div className="item" key={recipe.id}>
                <div className="image">
                  <img src={recipe.image} alt={recipe.name} />
                </div>
                <div className="info">
                  <h3 className="title">{recipe.name}</h3>
                  <p className="minute">{recipe.cookTimeMinutes} minutes</p>
                  <p className="rate">{recipe.rating}⭐</p>
                </div>
              </div>
            ))}
        </div>

        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <li
              onClick={handlePagiNumber}
              key={index}
              data-page={index + 1}
              className={pageNum === index + 1 ? "active" : ""}
            >
              {index + 1}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListFood;
