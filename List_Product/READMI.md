## ================== Vận dụng kiến thức làm trang Sản Phẩm và trang Giỏ Hàng ==================

# 1. Kiến thức:

-> React[route,redux]
-> Call API
-> combineReducers của redux
-> createStore,Provider của redux
-> useRoutes cảu react-router-dom
-> useSelector,useDispatch của redux

# 2. Chức năng:

-> Thêm sản phẩm vào giỏ hàng,cập nhật số lượng
-> Sản phẩm được thêm vào trang giỏ hàng tiến hành cập nhật số lượng và tính thành tiền

    + Hiển thị danh sách sản phẩm
    + Hiển thị giỏ hàng, tính toán tổng tiền đơn hàng
    + Icon giỏ hàng thêm tag số lượng trong giỏ hàng (dùng reduce() js )
    + Khi click vào button thêm vào giỏ hàng thì sẻ add sản phẩm vào trong redux, nếu đã có sản phẩm thì tăng lên thêm
