import './HobbiesList.css';

function HobbiesList({ hobbies }) {
  return (
    <div className="hobbies-container">
      <h2 className="hobbies-title">My Hobbies</h2>
      <ul className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <li key={index} className="hobby-item">
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HobbiesList;

