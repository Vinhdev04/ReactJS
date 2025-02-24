import PrivateRoutes from "../components/PrivateRoutes";
import Default from "../layout/Default";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogAll from "../pages/Blog/BlogAll";
import BlogDetails from "../pages/Blog/BlogDetails";
import BlogLeasted from "../pages/Blog/BlogLeasted";
import BlogNew from "../pages/Blog/BlogNew";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Login from "../pages/Login";
import Project from "../pages/Project";

// TODO: Tạo Route gồm đường dẫn và tên
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
        path: "about",
        element: <About />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            index: true,
            element: <BlogAll />,
          },
          {
            path: "news",
            element: <BlogNew />,
          },
          {
            path: "leasted",
            element: <BlogLeasted />,
          },
          {
            path: ":id",
            element: <BlogDetails />,
          },
        ],
      },
      {
        path: "",
        element: <PrivateRoutes />,
        children: [
          {
            path: "info-user",
            element: <Info />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },

  // <Routes>
  //   <Route path="/" element={<Default />}>
  //     <Route path="/" element={<Home />}></Route>
  //     <Route path="about" element={<About />}></Route>
  //     <Route path="project" element={<Project />}></Route>
  //     <Route path="contact" element={<Contact />}></Route>
  //     <Route path="blog" element={<Blog />}>
  //       <Route index element={<BlogAll />}></Route>
  //       <Route path="news" element={<BlogNew />}></Route>
  //       <Route path="leasted" element={<BlogLeasted />}></Route>
  //       <Route path=":id" element={<BlogDetails />}></Route>
  //     </Route>
  //     {/* <Route path="info-user" element={<Info />}></Route> */}
  //     <Route element={<PrivateRoutes />}>
  //       <Route path="info-user" element={<Info />}></Route>
  //     </Route>
  //     <Route path="login" element={<Login />}></Route>
  //     <Route path="*" element={<Error404 />}></Route>
  //   </Route>
  // </Routes>
];
