import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="main">
        <Content message="Message 1" active={true} />
        <Main />
        <Content message="Message 2" active={false} />
      </div>
      <Footer />
    </>
  );
}

export default App;
