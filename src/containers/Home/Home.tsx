import "./Home.scss";
import team from "../../data/team";
import NameTile from "../../components/NameTile/NameTile";

const Home = () => {
  return (
    <div className="home">
      <h2 className="home__heading">All Staff</h2>
      <section className="home__staff">
        {team.map((member) => {
          return (
            <div className="home__staff--container">
              <NameTile
                name={member.name}
                role={member.role}
                image={member.profile.profilePicture}
                team={team}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
