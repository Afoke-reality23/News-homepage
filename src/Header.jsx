import logo from "./assets/images/logo.svg";
import menu from "./assets/images/icon-menu.svg";
import closeMenu from "./assets/images/icon-menu-close.svg";
export default function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <DesktopNavMenu />
      {props.menuState ? (
        <img src={menu} alt="" className="open" onClick={props.handleOpen} />
      ) : (
        <MobileNavMenu onClick={props.handleClose} />
      )}
    </div>
  );
}
function MobileNavMenu(props) {
  return (
    <>
      <img src={closeMenu} alt="" className="close" onClick={props.onClick} />
      <nav className="mobile-nav">
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trend</li>
          <li>Categories</li>
        </ul>
      </nav>
    </>
  );
}
function DesktopNavMenu(props) {
  return (
    <>
      <nav className="desktop-nav">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trend</li>
        <li>Categories</li>
      </nav>
    </>
  );
}
