import logo from './logo.svg';
import './App.css';
import Set from './Set';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To Do App 
        </p>
  
        <Set />
      </header>
    </div>
  );
}

export default App;
