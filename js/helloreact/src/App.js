import React, {useState} from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState (0);

  return (
    <div className="App">
      {count <= 10
      ? <p>You have pressed the button {count} times</p>
      : <p>You have pressed the butto more than 10 times</p>
      }
      <button onClick={() => setCount(count + 1)}>Press me</button>
    </div>
  );
}

export default App;
