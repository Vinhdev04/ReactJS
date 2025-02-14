import React from "react";
import swal from "sweetalert";
function DeleteProduct(props) {
  const { item, onReload } = props;

  const handleDelete = () => {
    console.log(item.id); // check id product
    swal({
      title: "Bạn có chắc muốn xóa?",
      text: "Nếu bạn chọn xóa thì sẻ không thể khôi phục!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // TODO: call API DELETE product
        fetch(`http://localhost:3000/products/${item.id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              onReload(); // update data

              // import SweetAlert
              swal("Thành công! Bạn đã xóa sản phẩm thành công!", {
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        swal("Đã hủy việc xóa sản phẩm!");
      }
    });
  };

  return (
    <button className="btn btn-remove" onClick={handleDelete}>
      Xóa
    </button>
  );
}

export default DeleteProduct;
