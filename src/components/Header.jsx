import { NavLink } from "react-router-dom";
import logo from "../assets/the-akrams-logo.svg";
export default function Header() {
  const NavLinkCSS = ({ isActive }) => {
    if (isActive) {
      return {
        color: "black",
        fontWeight: 600,
      };
    } else {
      return {};
    }
  };

  return (
    <div className="header">
      <div className="logo">
        {" "}
        <img src={logo} alt="" className="logo" />{" "}
        <span className="logo-text">The Akrams Learning Point</span>
      </div>
      <div className="spacer"></div>
      <ul className="navigation">
        <li>
          <NavLink to="/" style={NavLinkCSS}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={NavLinkCSS}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/info" style={NavLinkCSS}>
            User Info
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
