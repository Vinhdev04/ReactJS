import LayoutDefault from "../Layout/LayoutDefault";
import Dashboard from "../pages/Dashboard";
import Project from "../pages/Project";

// TODO: Tạo Route gồm đường dẫn và tên
export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
];
