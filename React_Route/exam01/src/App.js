import "./App.css";
import AllRoutes from "./components/AllRoutes";
function App() {
  return (
    <>
      {/* <Default /> */}
      {/* <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="blog" element={<Blog />}>
            <Route index element={<BlogAll />}></Route>
            <Route path="news" element={<BlogNew />}></Route>
            <Route path="leasted" element={<BlogLeasted />}></Route>
            <Route path=":id" element={<BlogDetails />}></Route>
          </Route>
       
          <Route element={<PrivateRoutes />}>
            <Route path="info-user" element={<Info />}></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Route>
      </Routes> */}
      <AllRoutes />
    </>
  );
}

export default App;
