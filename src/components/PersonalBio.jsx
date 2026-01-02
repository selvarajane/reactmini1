import './PersonalBio.css';

function PersonalBio({ name, age, bio }) {
  return (
    <div className="personal-bio">
      <h2 className="bio-name">{name}</h2>
      <p className="bio-age">Age: {age}</p>
      <p className="bio-text">{bio}</p>
    </div>
  );
}

export default PersonalBio;

