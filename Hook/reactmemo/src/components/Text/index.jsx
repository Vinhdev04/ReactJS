import React, { memo } from "react";
function Text(props) {
  console.log("TÔI BỊ RENDER LẠI TỪ SỰ THAY ĐỔI CỦA COMPONENT (COUNTER)!.....");
  return (
    <div>
      <p>
        Dữ liệu này sẻ bị render lại mặc dù nó ko thay đổi{" "}
        <span style={{ fontWeight: "bold", color: "red" }}>
          Vậy nên hãy thử sử dụng memo() để bọc lại components
        </span>
      </p>
    </div>
  );
}

export default memo(Text);
