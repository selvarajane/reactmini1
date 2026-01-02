import { useState } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Simple Counter</h2>
      <div className="counter-display">{count}</div>
      <button 
        className="counter-button"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default SimpleCounter;

