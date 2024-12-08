import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import ColorBox from "./components/ColorBox";

function App() {
  return (
    <>
      {/* <TodoFeature />, */}
      <AlbumFeature />
      <ColorBox />
    </>
  );
}

export default App;
