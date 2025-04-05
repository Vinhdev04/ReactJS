import { VerticalAlignBottomOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
function ButtonAntd(props) {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(!loading);
    setTimeout(() => {
      alert("Button clicked");
      setLoading(loading);
    }, 3000);
  };
  return (
    <>
      <Button
        type="default"
        shape="default"
        loading={loading}
        disabled={loading}
        size="middle"
        onClick={handleClick}
        href="https://ant.design/components/button"
        target="_blank"
      >
        Default
      </Button>
      <Button
        type="dashed"
        loading={loading}
        disabled={loading}
        size="middle"
        onClick={handleClick}
        icon={<VerticalAlignBottomOutlined rotate={180} spin={true} />}
      >
        Download
      </Button>
    </>
  );
}

export default ButtonAntd;
