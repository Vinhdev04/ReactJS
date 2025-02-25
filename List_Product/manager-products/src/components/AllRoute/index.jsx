import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";
function AllRoute(props) {
  const elements = useRoutes(routes);
  console.log(elements);

  return <>{elements}</>;
}

export default AllRoute;
