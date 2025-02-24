import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Default.scss";

// import { Redirect } from "react-router-dom";
function Default(props) {
  // custom active
  const activeLink = (e) => {
    console.log(e);
    return e.isActive ? "layout__link layout__link--active" : "layout__link";
  };
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__logo">Logo</div>
        <div className="layout__menu">
          <ul>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeLink}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className={activeLink}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={activeLink}>
                Blog
              </NavLink>
              <ul className="menu__sub">
                <li>
                  <NavLink to="/blog/news" className={activeLink}>
                    Blog News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog/leasted" className={activeLink}>
                    Blog Leasted
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* <li>
              <Redirect from="/about" to="/contact">
                Contact
              </Redirect>
            </li> */}
          </ul>
        </div>
      </header>
      <main className="layout__body">
        {/* Chỉ định phần tử hiển thị bằng Outlet */}
        <Outlet />
      </main>
      <footer className="layout__footer">Copyright 2025 @VaniizIT</footer>
    </div>
  );
}

export default Default;
