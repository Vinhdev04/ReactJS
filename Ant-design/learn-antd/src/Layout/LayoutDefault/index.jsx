import { MenuUnfoldOutlined, SearchOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuItem from "../../components/MenuItem";
import Notify from "../../components/Notify";
import logoFold from "../../Images/logo-fold.png";
import logo from "../../Images/logo.png";
import "./LayoutDefault.css";
function LayoutDefault(props) {
  const [collapsed, setCollapse] = useState(false);
  console.log(collapsed);

  return (
    <>
      <Layout className="layout-default">
        <header className="layout-header">
          <div
            className={
              "header__logo " + (collapsed && "header__logo--collapsed")
            }
          >
            <img src={collapsed ? logoFold : logo} alt="Logo" />
          </div>
          <div className="header__navbar">
            <div className="header__nav-left">
              <div
                className="header__collapse"
                onClick={() => setCollapse(!collapsed)}
              >
                <MenuUnfoldOutlined />
              </div>
              <div className="header__search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header__nav-right">
              <Notify></Notify>
            </div>
          </div>
        </header>

        <Layout>
          <Sider className="layout-sider" collapsed={collapsed} theme="light">
            <MenuItem></MenuItem>
          </Sider>

          <Content className="layout-content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default LayoutDefault;
