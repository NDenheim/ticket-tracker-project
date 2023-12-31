import "./App.scss";
import TrackerTiles from "./components/TrackerTile/TrackerTile";
import Nav from "./components/Nav/Nav";
import TeamMember from "./types/Member";
import { HashRouter, Route, Routes } from "react-router-dom";
import Tickets from "./containers/Tickets/Tickets";
import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";
import team from "./data/team";

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
  return (
    <HashRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/:memberId" element={<Profile members={team} />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
