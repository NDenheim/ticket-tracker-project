import { FormEvent, useState } from "react";
import "./App.scss";
import FilterBar from "./components/Filter/Filter";
import DropdownBox from "./components/Dropdown/Dropdown";
import TrackerTiles from "./components/TrackerTile/TrackerTile";
import team from "./data/team";
import TeamMember from "./types/Member";

export const handleRender = (team: TeamMember[]) => {
  const members = team.map((member: any) => {
    return (
      <div>
        <TrackerTiles name={member.name} role={member.role} />
      </div>
    );
  });
  return members;
};

const App = () => {
  const [filter, setFilter] = useState<string>("");
  const [dropdown, setDropdown] = useState<string>("");

  const handleFilterByName = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    setFilter(userInput);
  };

  let teamFilteredByName = team.filter((member) => {
    return member.name.toLowerCase().includes(filter);
  });

  const handleFilterByRole = (event: FormEvent<HTMLSelectElement>) => {
    const userInput = event.currentTarget.value;
    setDropdown(userInput);
  };

  let teamFilteredByRole = teamFilteredByName.filter((member) => {
    if (dropdown == "") {
      return team;
    } else {
      return member.role == dropdown;
    }
  });

  let ticketTrackers = handleRender(teamFilteredByRole);

  return (
    <div className="app">
      <h3 className="heading">Ticket Tracker</h3>
      <div className="filters">
        <FilterBar handleFilterByName={handleFilterByName} />
        <DropdownBox handleFilterByRole={handleFilterByRole} />
      </div>
      <section className="all-tiles">{ticketTrackers}</section>
    </div>
  );
};

export default App;
