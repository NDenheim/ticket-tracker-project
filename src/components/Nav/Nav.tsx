import React, { useState } from "react";
import "./Nav.scss";
import menu from "../../assets/images/menu-icon.png";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import Logo from "../../assets/images/Microsoft-logo.png";

type NavProps = {};

const Nav = ({}: NavProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleNav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      {showMenu && <NavMenu onClose={toggleNav} />}
      <div className="nav__logo">
        <img className="nav__logo--image" src={Logo} alt="Microsoft Logo" />
        <Link to={"./"} className="nav__logo--heading">
          Microsoft
        </Link>
      </div>
      <img
        className="nav__menu"
        src={menu}
        alt="Menu Icon"
        onClick={toggleNav}
      />
    </nav>
  );
};

export default Nav;
