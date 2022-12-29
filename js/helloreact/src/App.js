import React, {useState} from 'react';
import './App.css';
import Message from "./Message";
import Hello from "./Hello";
import Userinput from './Userinput';
import Multipleuserinput from './Multipleuserinput';
import Age from "./Age";
import Calculator from "./Calculator";
import Registration from './Registration';
import Nasa from './Nasa';

function App() {
  const [count, setCount] = useState (0);

  return (
    <div className="App">
      {count <= 10
      ? <p>You have pressed the button {count} times</p>
      : <p>You have pressed the button more than 10 times</p>
      }
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Clear</button>
      <Nasa />
      <Message message="Hello" />
      <Hello />
      <Userinput />
      <Multipleuserinput />
      <Age />
      <Calculator />
      <Registration />
    </div>
  );
}

export default App;
