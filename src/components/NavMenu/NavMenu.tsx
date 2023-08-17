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
        <Link to={"/profile"} onClick={onClose} className="nav-menu__item">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;

// const NavMenu = ({ onClose }: NavMenuProps) => {
//     return (
//       <div className="nav-menu">
//         <div className="nav-menu__content">
//           <img
//             src={blackCross}
//             alt="Close menu"
//             className="nav-menu__cross"
//             onClick={onClose}
//           />
//           <Link to={"/"} className="nav-menu__item" onClick={onClose}>
//             Home
//           </Link>

//           <Link to={"/albums"} className="nav-menu__item" onClick={onClose}>
//             All Albums
//           </Link>

//           <Link to={"/albums/rated"} className="nav-menu__item" onClick={onClose}>
//             Rated Albums
//           </Link>
//         </div>
//       </div>
//     );
//   };
