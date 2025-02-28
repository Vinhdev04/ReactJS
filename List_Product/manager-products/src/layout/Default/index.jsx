import React from "react";
import { BiCartAlt, BiLogoDevTo } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import CartNumber from "../../components/CartNumber";
import "./Default.scss";
function Default(props) {
  return (
    <>
      <div className="layout">
        <header className="layout__header">
          <div className="layout__logo">
            <Link to="/">
              <BiLogoDevTo />
            </Link>
            Dev Store
          </div>
          <div className="layout__cart">
            <CartNumber />
          </div>
        </header>
        <div className="layout__body">
          <Outlet />
        </div>
        <footer className="layout__copyRight">
          Copyright @ 2025 by Vaniiz IT
        </footer>
      </div>
    </>
  );
}

export default Default;
