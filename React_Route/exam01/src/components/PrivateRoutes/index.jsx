import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function PrivateRoutes(props) {
  //TODO Nếu login -> show thông tin
  const isLogin = false;
  return (
    <>
      <div>PrivateRoutes</div>
      {isLogin ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
}

export default PrivateRoutes;
