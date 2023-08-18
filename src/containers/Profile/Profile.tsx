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
    <div className=".profile">
      <div className="profile__content">
        <h3>{chosenMember.name}</h3>
        <img
          src={chosenMember.profile.profilePicture}
          alt={chosenMember.name}
        />
        <ul className="profile__info">
          <li>Role: {chosenMember.role}</li>
          <li>Experience: {chosenMember.profile.experience}</li>
          <li>Department: {chosenMember.profile.department}</li>
          <li>Tech Stack: {chosenMember.profile.techstack.join(", ")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

// type AlbumInfoProps = {
//     albums: Album[];
//   };

//   const AlbumInfo = ({ albums }: AlbumInfoProps) => {
//     let { albumId } = useParams();

//     const album = albums.find((album) => album.idAlbum === albumId);
//     if (album === undefined) {
//       return <p>Couldn't find an album with that id</p>;
//     }

//     const lastSentenceIndex = album.strDescriptionEN?.indexOf(".", 300);
//     const shortenedText = album.strDescriptionEN?.substring(0, lastSentenceIndex);

//     return (
//       <article className="album-info">
//         <div className="album-info__banner">
//           <img
//             src={album.strAlbumThumb || undefined}
//             alt={album.strAlbum}
//             className="album-info__image album-info__image--first"
//           />
//         </div>
//         <div className="album-info__content">
//           <h2 className="album-info__heading">{album.strAlbum}</h2>
//           <p>{shortenedText ?? undefined}</p>
//           <h2 className="album-info__heading">Facts</h2>
//           <ul className="album-info__facts">
//             <li>Mood : {album.strMood} </li>
//             <li>Released : {album.intYearReleased} </li>
//             <li>Genre : {album.strGenre} </li>
//             <li>Score : {album.intScore} </li>
//           </ul>
//         </div>
//         <div className="album-info__banner">
//           <img
//             src={album.strAlbumThumb || undefined}
//             alt={album.strAlbum}
//             className="album-info__image album-info__image--last"
//           />
//         </div>
//       </article>
//     );
//   };
