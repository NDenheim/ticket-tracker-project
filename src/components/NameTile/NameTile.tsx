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

{
  /* <Link to={`/albums/${album.idAlbum}`} key={album.idAlbum}> */
}

{
  /* <div className="name-tile">
        {team.map((member) => {
            <Link to={`/${member}`}>
            <img className="name-tile__image" src={image} alt="Staff picture" />
            <h2>{name}</h2>
            <p>{role}</p>
        </Link>
    })}; */
}

// const NameTile = ({ name, role, image, team }: NameTileProps) => {
//     return (
//       <div className="name-tile">
//         <img className="name-tile__image" src={image} alt="Staff picture" />
//         {team.map((member) => (
//           <Link to={`/${member.name}`}>
//             <h2>{name}</h2>
//           </Link>
//         ))}
//         ;<p>{role}</p>
//       </div>
//     );
//   };
