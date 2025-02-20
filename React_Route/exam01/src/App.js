import { Route, Routes } from "react-router-dom";
import "./App.css";
import Default from "./layout/Default";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Project from "./pages/Project";
function App() {
  return (
    <>
      {/* <Default /> */}
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
