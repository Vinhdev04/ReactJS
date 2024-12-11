import React, { useState } from "react";
import { memo } from "react";
import Text from "../Text";

// TODO: React.memo() -> ghi nhớ kết quả, thành phần component ko thay đổi => không render lại
function UseMemo(props) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>Result: {count}</div>
      <button onClick={handleIncrease}>Increase Counter</button>
      <button onClick={handleDecrease}>Decrease Counter</button>
      <Text />
    </>
  );
}

export default memo(UseMemo);
