import "./NavMenu.scss";
import cross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";

type NavMenuProps = {
  onClose: () => void;
};

const NavMenu = ({ onClose }: NavMenuProps) => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img
          className="nav-menu__cross"
          src={cross}
          alt="Close menu"
          onClick={onClose}
        />
        <Link to={"/"} onClick={onClose} className="nav-menu__item">
          Home
        </Link>
        <Link to={"/tickets"} onClick={onClose} className="nav-menu__item">
          Tickets
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
