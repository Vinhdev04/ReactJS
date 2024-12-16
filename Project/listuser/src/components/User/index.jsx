import React, { useEffect, useState } from "react";
import "./style.css";

function User(props) {
  // State lưu danh sách người dùng từ API
  const [user, setUser] = useState([]);

  // State quản lý trạng thái tải dữ liệu
  const [loading, setLoading] = useState(true);

  // State quản lý lỗi trong quá trình gọi API
  const [error, setError] = useState(null);

  // State kiểm soát hiển thị danh sách người dùng
  const [active, setActive] = useState(true);

  // State để quản lý phân trang
  const [pagination, setPagination] = useState([]);

  // State quản lý trang hiện tại
  const [currentPage, setCurrentPage] = useState(0);

  // State lưu tổng số trang
  const [totalPages, setTotalPages] = useState(0);

  // Giới hạn số lượng người dùng hiển thị mỗi trang
  const limit = 15;

  // Hàm toggle trạng thái hiển thị danh sách người dùng
  const handleShowHide = () => {
    setActive(!active);
  };

  // Hàm xử lý khi chuyển trang
  const handlePagination = (page) => {
    setCurrentPage(page); // Cập nhật trang hiện tại
  };

  // Gọi API để lấy dữ liệu người dùng và phân trang
  useEffect(() => {
    const controller = new AbortController(); // Tạo AbortController để quản lý request

    const fetchUsers = async () => {
      try {
        setLoading(true); // Bắt đầu trạng thái tải
        setError(null); // Xóa trạng thái lỗi trước đó

        // Gọi API với phân trang
        const response = await fetch(
          `https://dummyjson.com/users?skip=${
            limit * currentPage
          }&limit=${limit}`,
          {
            signal: controller.signal, // Truyền signal để hủy request khi cần
          }
        );

        if (!response.ok) {
          throw new Error(
            `API Error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        // Cập nhật danh sách người dùng và tổng số trang
        setUser(data.users);
        setTotalPages(Math.ceil(data.total / limit)); // Tính tổng số trang
      } catch (err) {
        setError(err.message); // Ghi nhận lỗi nếu xảy ra
      } finally {
        setLoading(false); // Kết thúc trạng thái tải
      }
    };

    fetchUsers(); // Gọi hàm lấy dữ liệu

    // Cleanup function để hủy request nếu component bị unmount
    return () => controller.abort();
  }, [currentPage]); // useEffect được kích hoạt lại khi `currentPage` thay đổi

  return (
    <>
      <h1 className="user-title">List of Users from API</h1>
      <button className="btn" onClick={handleShowHide}>
        {active ? "Hide" : "Show"}{" "}
      </button>

      <div className="list-user">
        {/* Hiển thị trạng thái tải */}
        {loading && <p>Loading users...</p>}

        {/* Hiển thị thông báo lỗi nếu có */}
        {error && <p>Error: {error}</p>}

        {/* Hiển thị danh sách người dùng khi không có lỗi */}
        {active &&
          !loading &&
          !error &&
          user.map((userItem) => (
            <div key={userItem.id} className="user">
              <div className="wrap">
                {/* Hiển thị ảnh đại diện người dùng */}
                <img src={userItem.image} alt={userItem.username} />
              </div>
              <div className="info">
                <p className="info-email">
                  <b>Username</b>: {userItem.username}
                </p>
                <p className="info-email">
                  <b>Password</b>: {userItem.password}
                </p>
                <p className="info-birth">
                  <b>BirthDate</b>: {userItem.birthDate}
                </p>
                <p className="info-gender">
                  <b>Gender</b>: {userItem.gender}
                </p>
                <p className="info-email">
                  <b>Email</b>: {userItem.email}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Phân trang */}
      <div className="pagination">
        {[...Array(totalPages)].map((_pagination, index) => (
          <li
            key={index}
            onClick={() => handlePagination(index)}
            className={index === currentPage ? "active" : ""}
            tại
          >
            {index + 1}
          </li>
        ))}
      </div>
    </>
  );
}

export default User;
