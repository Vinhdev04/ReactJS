import React from "react";
import { memo } from "react";

// TODO: React.memo() -> ghi nhớ kết quả, thành phần component ko thay đổi => không render lại
function Text(props) {
  console.log("Render component Text ");
  return (
    <div>
      <p>
        Bài toán: Khi ko sử dụng React.memo() khi đó các components ko thay đổi
        vẫn bị render lại
      </p>
    </div>
  );
}

export default memo(Text);
