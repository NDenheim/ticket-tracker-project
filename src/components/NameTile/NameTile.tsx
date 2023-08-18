import "./NameTile.scss";
import { Link } from "react-router-dom";
import TeamMember from "../../types/Member";

type NameTileProps = {
  name: string;
  role: string;
  image: string;
  team: TeamMember[];
};

const NameTile = ({ name, role, image }: NameTileProps) => {
  return (
    <div className="name-tile">
      <img className="name-tile__image" src={image} alt="Staff picture" />
      <Link to={`/${name}`}>
        <h2 className="name-tile__name">{name}</h2>
      </Link>
      <p className="name-tile__role">{role}</p>
    </div>
  );
};

export default NameTile;
