import { NavLink } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "hamburger-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="line hide-mobile hide-tablet"></div>
      <nav className={`nav-items ${isOpen ? "open" : ""}`}>
        <NavLink className="nav-item" to="/">
          <div className="is-flex is-centered">
            <span className="hide-tablet">00</span>
            <p>Home</p>
          </div>
          <div className="underline" />
        </NavLink>
        <NavLink className="nav-item" to="/destination">
          <div className="is-flex is-centered">
            <span className="hide-tablet">01</span>
            <p>Destination</p>
          </div>
        </NavLink>
        <NavLink className="nav-item" to="/crew">
          <div className="is-flex is-centered">
            <span className="hide-tablet">02</span>
            <p>Crew</p>
          </div>
        </NavLink>
        <NavLink className="nav-item" to="/technology">
          <div className="is-flex is-centered">
            <span className="hide-tablet">03</span>
            <p>technology</p>
          </div>
        </NavLink>
      </nav>
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
    </div>
  );
};
