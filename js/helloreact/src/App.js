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
import Users from './Users';
import Userinputfetch from './Userinputfetch';
import Quiz from './Quiz';
import Gitapi from './Gitapi';
import Gitsearch from './gitsearch';
import Router from './Router';

function App() {
  const [count, setCount] = useState (0);

  return (
    <div className="App">
      <Router />
      <Gitsearch />
      <Gitapi />
      <Quiz />
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
      <Users />
      <Userinputfetch />
    </div>
  );
}

export default App;
