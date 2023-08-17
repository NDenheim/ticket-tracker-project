type TeamMember = {
  id: number;
  name: string;
  role: string;
  profile: {
    experience: string;
    department: string;
    techstack: string[];
    profilePicture: string;
  };
};

export default TeamMember;
