const ProfileCard = ({ user }) => (
  <div>
    <h2>Profile</h2>
    <p>Name: {user.fullName}</p>
    <p>Email: {user.email}</p>
  </div>
);

export default ProfileCard;
