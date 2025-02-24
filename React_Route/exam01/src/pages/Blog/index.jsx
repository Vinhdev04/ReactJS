import React from "react";
import { Outlet } from "react-router-dom";

function Blog(props) {
  return (
    <>
      <h1>Newsletter</h1>
      <Outlet />
    </>
  );
}

export default Blog;
