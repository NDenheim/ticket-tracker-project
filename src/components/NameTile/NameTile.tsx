import "./NameTile.scss";

type NameTileProps = {
  name: string;
  role: string;
  image: string;
};

const NameTile = ({ name, role, image }: NameTileProps) => {
  return (
    <div className="name-tile">
      <img className="name-tile__image" src={image} alt="Staff picture" />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
};

export default NameTile;
