import {
  DashboardOutlined,
  ProductOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
function MenuItem(props) {
  //OVERVIEW: Syntax: label,key,icon,children,type
  const items = [
    {
      label: <Link to="/">Dashboard</Link>,
      key: "/",
      icon: <DashboardOutlined />,
      children: [
        {
          label: "Ecommerce",
          key: "ecommerce",
        },
        {
          // sử dụng router điều hướng trang
          label: <Link to="/projects">Project</Link>,
          key: "project",
        },
        {
          label: "Analytics",
          key: "analytics",
        },
      ],
    },
    {
      label: "Users",
      key: "users",
      icon: <UserOutlined />,
      children: [
        {
          label: "List User",
          key: "list-user",
        },
        {
          label: "Add User",
          key: "add-user",
        },
        {
          label: "Edit User",
          key: "edit-user",
        },
        {
          label: "Delete User",
          key: "delete-user",
        },
        {
          label: "Detail User",
          key: "detail-user",
        },
      ],
    },
    {
      label: "Products",
      key: "products",
      icon: <ProductOutlined />,
      children: [
        {
          label: "List Product",
          key: "list-product",
        },
        {
          label: "Add Product",
          key: "add-product",
        },
        {
          label: "Edit Product",
          key: "edit-product",
        },
        {
          label: "Delete Product",
          key: "delete-product",
        },
        {
          label: "Detail Product",
          key: "detail-product",
        },
      ],
    },
    {
      label: "Category",
      key: "category",
      icon: <UnorderedListOutlined />,
      children: [
        {
          label: "List Category",
          key: "list-category",
        },
        {
          label: "Add Category",
          key: "add-category",
        },
        {
          label: "Edit Category",
          key: "edit-category",
        },
        {
          label: "Delete Category",
          key: "delete-category",
        },
        {
          label: "Detail Category",
          key: "detail-category",
        },
      ],
    },
    {
      label: "Setting",
      key: "setting",
      icon: <SettingOutlined />,
      children: [
        {
          label: "General",
          key: "general",
        },
        {
          label: "Security",
          key: "security",
        },
        {
          label: "Privacy",
          key: "privacy",
        },
        {
          label: "Notification",
          key: "notification",
        },
      ],
    },
  ];
  return (
    <>
      <Menu
        mode="inline"
        items={items}
        // item được chọn sẽ được hiển thị
        defaultOpenKeys={["dashboard"]}
        // key được chọn sẽ được mở
        defaultSelectedKeys={["ecommerce"]}
        // item được chọn sẽ được mở
        // openKeys={["user", "products", "category", "setting"]}
        // tương tự disabled
        selectable={false}
        subMenuCloseDelay={0.2}
      ></Menu>
    </>
  );
}

export default MenuItem;
