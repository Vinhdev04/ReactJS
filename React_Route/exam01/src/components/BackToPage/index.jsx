import React from "react";
import { useNavigate } from "react-router-dom";

function BackToPage(props) {
  //TODO: Sử dụng hook[useNavigate] để điều hướng đến trang bất kì
  const navigate = useNavigate();
  console.log(navigate);

  const handleBackPage = () => {
    navigate(-1); // điều hướng đến trang trước đó
  };

  return (
    <div>
      <button onClick={handleBackPage}>Back to Page</button>
    </div>
  );
}

export default BackToPage;
