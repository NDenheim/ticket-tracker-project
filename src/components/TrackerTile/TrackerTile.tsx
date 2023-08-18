import { useState } from "react";
import "./TrackerTile.scss";
import { Link } from "react-router-dom";

type TrackerTileProps = {
  name: string;
  role: string;
};

const TrackerTiles = ({ name, role }: TrackerTileProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="tracker">
      <Link to={`/${name}`}>
        <p className="name">{name}</p>
      </Link>
      <p>{role}</p>
      <div className="counter">
        <p>Counter</p>
        <p>{counter}</p>
        <div className="buttons">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export default TrackerTiles;
