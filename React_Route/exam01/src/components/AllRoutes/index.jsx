import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";
function AllRoutes(props) {
  //TODO: import hook[useRoutes] -> lưu mảng chứa các routes và converts mảng đó
  const elements = useRoutes(routes);
  console.log(elements);

  return <div>{elements}</div>;
}

export default AllRoutes;
