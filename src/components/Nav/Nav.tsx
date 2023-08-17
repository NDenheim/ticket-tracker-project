import React, { useState } from "react";
import "./Nav.scss";
import menu from "../../assets/images/menu-icon.png";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";

type NavProps = {};

const Nav = ({}: NavProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleNav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      {showMenu && <NavMenu onClose={toggleNav} />}
      <Link to={"./"} className="nav__heading">
        Microsoft
      </Link>
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
