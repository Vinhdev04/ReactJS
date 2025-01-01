import React, { useState } from "react";
import Modal from "react-modal";
import swal from "sweetalert";
function EditProduct(props) {
  const [isModal, setIsModal] = useState(false);
  const { item, onReload } = props;
  const [data, setData] = useState(item);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => {
    console.log(item);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // TODO: call API PATCH product -> Update (chỉ thay đổi những key gửi lên)
    fetch(`http://localhost:3000/products/${item.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setIsModal(false);
          onReload(); // update data

          // import SweetAlert
          swal(
            "Cập nhật thành công!",
            "Bạn đã cập nhật sản phẩm thành công!",
            "success"
          );
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // mặc định ban đầu data rỗng, mỗi khi thay đỗi dữ liệu sẻ thêm 1 Object mới cùng với dữ liệu cũ trước đó
    setData({
      ...data,
      [name]: value,
    });
  };
  // console.log(data);

  return (
    <div>
      <button onClick={openModal} className="btn btn-create">
        Chỉnh sửa
      </button>
      <Modal isOpen={isModal} onRequestClose={closeModal} style={customStyles}>
        <form action="#" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Tên sản phẩm</label>
            <input
              type="text"
              required
              placeholder=""
              name="title"
              id="title"
              onChange={handleOnChange}
              value={data.title}
            />
          </div>
          <div className="form-control">
            <label htmlFor="price">Giá</label>
            <input
              type="text"
              required
              placeholder=""
              name="price"
              id="price"
              onChange={handleOnChange}
              value={data.price}
            />
          </div>
          <div className="form-control">
            <label htmlFor="discountPercentage">Giảm giá</label>
            <input
              type="text"
              required
              id="discountPercentage"
              name="discountPercentage"
              onChange={handleOnChange}
              value={data.discountPercentage}
            />
          </div>
          <div className="form-control">
            <label htmlFor="stock">Số lượng</label>
            <input
              type="text"
              required
              name="stock"
              id="stock"
              placeholder=""
              onChange={handleOnChange}
              value={data.stock}
            />
          </div>
          <div className="form-control">
            <label htmlFor="image">Hình ảnh</label>
            <input
              type="text"
              required
              name="image"
              id="image"
              onChange={handleOnChange}
              value={data.image}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Danh mục</label>
            <input
              type="text"
              required
              id="category"
              name="category"
              onChange={handleOnChange}
              value={data.category}
            />
          </div>
          <div className="form-control">
            <label htmlFor="description">Mô tả</label>
            <textarea
              id="description"
              cols={30}
              rows={6}
              required
              placeholder="Nhập mô tả sản phẩm..."
              name="description"
              onChange={handleOnChange}
              value={data.description}
            ></textarea>
          </div>
          <div className="form-btn">
            <button
              className="btn btn-add"
              // onClick={handleCreateProduct}
              onClick={handleSubmit}
            >
              Tạo mới
            </button>
            <button className="btn btn-close" onClick={closeModal}>
              Hủy bỏ
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default EditProduct;
