### -------------------- Create Page Product --------------------

author: @Vinhdev04

# Mô tả:

- Tạo giao diện page sản phẩm
- Xây dựng chức năng thêm sản phẩm và render giao diện
- Đẩy dữ liệu vào database bằng postman
- Sử dụng fetch API và json--server
- Sử dụng prop để nhận dữ liệu từ các components

# Chức năng:

- Thêm sản phẩm
- Xóa sản phẩm
- Cập nhật sản phẩm

## Thêm sản phẩm:

- Sử dụng method: "POST"
- fetch(`http://localhost:3000/products/${item.id}`,
- { method: "POST",
-      headers: {
-        Accept: "application/json",
-        "Content-Type": "application/json",
-      },
-      body: JSON.stringify(data),
- })
  -> sử dụng "POST" đẩy dữ liệu lên API
  -> Reload page mỗi khi thêm1 sản phẩm sử dụng prop để truyền dữ liệu từ componenet

## Cập nhật sản phẩm:

- Sử dụng method: "PATCH"
- fetch(`http://localhost:3000/products/${item.id}`,
- { method: "PATCH",
-      headers: {
-        Accept: "application/json",
-        "Content-Type": "application/json",
-      },
-      body: JSON.stringify(data),
- })
  -> Sử dụng "PATCH" để cập nhật dữ liệu thông qua "id" sản phẩm
  -> "PATCH" chỉ thay đổi những trường được gửi lên còn lại dữ nguyên
  -> Reload page mỗi khi cập nhật 1 sản phẩm sử dụng prop để truyền dữ liệu từ componenet

## Xóa sản phẩm:

- Sử dụng method "DELETE"
- fetch(`http://localhost:3000/products/${item.id}`, {
-          method: "DELETE",
-        })
  -> Sử dụng "DELETE" để xóa thông qua "id" sản phẩm và ko cần truyền " headers" và "body"
  -> Reload page mỗi khi xóa 1 sản phẩm sử dụng prop để truyền dữ liệu từ componenet

# Tối ưu:

# Thư viện hỗ trợ:

- Rect modal: [text](https://www.npmjs.com/package/react-modal)
- sweetalert2: [text](https://www.npmjs.com/package/sweetalert2/v/6.6.1?activeTab=readme)
- json-server: [text](https://dummyjson.com/products),[text](https://github.com/Ovi/DummyJSON/tree/master?tab=readme-ov-file)
  -> Sử dụng React modal để thêm 1 số modal
  -> Sử dụng Sweetalert2 để dùng một số modal,popup,modal
