import { Fragment, useState } from "react";
import Header from "./Header";
import MainDiv from "./MainDiv";
import LeftBar from "./LeftBar";
import Footer from "./Footer";
import "./App.css";
function App() {
  const [menuBar, setMenuBar] = useState(true);
  return (
    <div className="main-body">
      <Header
        menuState={menuBar}
        handleOpen={() => {
          setMenuBar(!menuBar);
        }}
        handleClose={() => {
          setMenuBar(!menuBar);
        }}
      />
      <div className="main-content">
        <MainDiv />
        <LeftBar />
      </div>

      <Footer />
    </div>
  );
}

export default App;
