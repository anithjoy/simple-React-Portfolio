import profile from "../media/profile.jpg";

const Starter = () => {
  return (
    <div>
      <div class="profile-picture">
        <image src={profile} className="profile-pic" alt="Profile Picture" />
        <h1 style={{ color: "Yellow" }}>Hii, I am Anith Joy </h1>
      </div>
    </div>
  );
};

export default Starter;
