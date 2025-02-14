import React, { useState } from "react";
import Modal from "react-modal";
import swal from "sweetalert";
import { createProduct } from "../../Services/createProduct";
function CreateProduct(props) {
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState({});

  const { onReload } = props;

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
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: call API POST product from Services
    const result = await createProduct(data);
    if (result) {
      setIsModal(false);
      onReload(); // render when POST product

      // import SweetAlert
      swal("Thành công!", "Bạn đã thêm sản phẩm thành công!", "success");
    }
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
        + Tạo sản phẩm
      </button>

      {/*import Modal  */}
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

export default CreateProduct;
