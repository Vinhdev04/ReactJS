import React from "react";
import Header from "../Header";
import Menu from "../Menu";

// TODO: useContext:
import { createContext } from "react";
export const DataContext = createContext();
function Layout(props) {
  const data = ["Home", "About", "Projects", "Contact"];

  return (
    <>
      <DataContext.Provider value={data}>
        <Header />
        <div>Content</div>
        <div>Footer</div>
      </DataContext.Provider>
      {/* <Header data={data} />
      <div>Content</div>
      <div>Footer</div> */}
    </>
  );
}

export default Layout;
