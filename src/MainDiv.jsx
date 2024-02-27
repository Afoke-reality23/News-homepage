import mobile from "./assets/images/image-web-3-mobile.jpg";
import desktop from "./assets/images/image-web-3-desktop.jpg";
export default function MainDiv() {
  return (
    <div className="main-div">
      <img src={mobile} alt="" className="mobile-main-image" />
      <img src={desktop} alt="" className="desktop-main-image" />
      <div className="main-para">
        <h1 className="main-header">The Bright Future of Web 3.0?</h1>
        <p className="main-text">
          we dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people.But is it
          really fufilling its promise?
          <button>READ MORE</button>
        </p>
      </div>
    </div>
  );
}
