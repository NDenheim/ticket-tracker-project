import { useParams } from "react-router-dom";
import TeamMember from "../../types/Member";
import "./Profile.scss";
// import team from "../../data/team";

type ProfileProps = {
  members: TeamMember[];
};

const Profile = ({ members }: ProfileProps) => {
  let { memberId } = useParams();

  const chosenMember = members.find((member) => member.name === memberId);

  if (chosenMember === undefined) {
    return <p>Couldn't find a staff member with that name</p>;
  }
  return (
    <div className="profile">
      <div className="profile__content">
        <h3>{chosenMember.name}</h3>
        <img
          src={chosenMember.profile.profilePicture}
          alt={chosenMember.name}
        />
        <ul className="profile__info">
          <li className="profile__info--item">
            <strong>Role: </strong> {chosenMember.role}
          </li>
          <li className="profile__info--item">
            <strong>Experience: </strong> {chosenMember.profile.experience}
          </li>
          <li className="profile__info--item">
            <strong>Department: </strong> {chosenMember.profile.department}
          </li>
          <li className="profile__info--item">
            <strong>Tech Stack: </strong>{" "}
            {chosenMember.profile.techstack.join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
