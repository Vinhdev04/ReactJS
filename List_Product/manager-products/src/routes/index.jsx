import Default from "../layout/Default";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
export const routes = [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];
