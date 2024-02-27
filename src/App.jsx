import { Fragment, useState } from "react";
import Header from "./Header";
import MainDiv from "./MainDiv";
import LeftBar from "./LeftBar";
import Footer from "./Footer";
import "./App.css";
function App() {
  const [menuBar, setMenuBar] = useState(true);
  return (
    <>
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
    </>
  );
}

export default App;
