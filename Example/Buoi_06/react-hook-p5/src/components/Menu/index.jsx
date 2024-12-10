import React from "react";
import { useContext } from "react";
import { DataContext } from "../Layout";

function Menu(props) {
  // const { data } = props;

  // TODO: useContext
  const data = useContext(DataContext);
  console.log(data);
  return (
    <>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
