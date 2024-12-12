## ------------- Project mini 01 [counter like and share] bằng useState -------------

# Kiến thức vận dụng:

-> hook[useState]
-> kiến thức về hook,Component
-> sử dụng useState:
-> quản lý trạng thái (likes/shares) trong React
-> Mỗi button (Like/share/reset) được thiết lập để cập nhật trạng thái qua hàm setState()

# Callback trong setState:

-> sử dụng callback ( setShare((prev) => prev + 1)....) để đảm bảo rằng giá trị cập nhật dựa trên trạng thái mới nhất,
-> tránh lỗi khi cập nhật trạng thái nhiều lần như việc sử dụng (setShare(like+1),..)

# Làm việc với localStorage:

-> lưu trữ và truy xuất trạng thái (likes/shares) vào localStorage bằng các hàm setItem(),getItem()
-> Kết hợp với JSON.stringify() và JSON.parse() để lưu và đọc dữ liệu phức tạp hơn (dạng số, mảng, đối tượng).

# Sử dụng useEffect() để đồng bộ hóa:

-> đồng bộ tráng thái likes/shares với localStorage mỗi khi thay đổi
-> useEffect() đảm bảo việc lưu trữ ngay sau khi trạng thái được cập nhật thông qua tham số "dependency" của useEffect()

# Kiến thức được áp dụng để cải thiện code:

1. Tối ưu hóa cập nhật trạng thái:
   -> Sử dụng callback trong setState để tránh xung đột trạng thái trong các cập nhật liên tiếp hoặc bất đồng bộ.
2. Quản lý dữ liệu hiểu quả hơn với localStorage:
   -> đồng bộ hóa trạng thái với localStorage thông qua useEffect()
   -> đảm bảo rằng localStorage luôn chứa chính xác nhất bằng cách cập nhật sau môi lần thay đổi trạng thái [likes/shares]
3. Reset đồng bộ:
   -> khi click button reset không chỉ đặt lại trạng thái mà còn đồng bộ giá trị của localStorage.

# Các vấn đề tồn đọng:

1. Truy xuất và hiển thị dữ liệu không đồng bộ:
   -> Dữ liệu hiển thị (likes và shares) không luôn đồng bộ với LocalStorage, đặc biệt khi thực hiện thao tác liên tục.
2. Dữ liệu trong LocalStorage không khởi tạo khi ứng dụng bắt đầu:
   -> Hiện tại, khi ứng dụng tải lần đầu, giá trị trong likes và shares không được lấy từ LocalStorage mà luôn bắt đầu từ 0.
3. Không lưu trạng thái qua lần tải lại trang:
   -> Sau khi tải lại trang, các giá trị likes và shares vẫn hiển thị từ React state (reset về 0), không đọc từ LocalStorage.
