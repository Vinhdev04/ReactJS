import { useEffect } from "react";
function UseEffect() {
  // # dữ liệu khi được render ra giao diện trước sẻ dẫn tới lỗi ko thể lấy ra các phần tử như mong muô
  // const listItems = document.querySelectorAll("ul li");
  // console.log(listItems);

  // # useEffect: chạy khi component render hoặc khi props thay đổi
  useEffect(() => {
    // # sau khi dữ liệu được render ra giao diện -> callback ở trong useEffect() chạy
    const listItems = document.querySelectorAll("ul li");
    console.log(listItems);
  });

  return (
    <>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  );
}
export default UseEffect;
