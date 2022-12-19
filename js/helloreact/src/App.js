import React, {useState} from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState (0);

  return (
    <div className="App">
      You have presset the button {count} times <br />
      <button onClick={() => setCount(count + 1)}>Press me</button>
    </div>
  );
}

export default App;
