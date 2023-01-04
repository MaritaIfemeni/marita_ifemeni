import React from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import Home from "./components/Home";
import NotFound from "./components/Notfound";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <br></br>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/About">To Do List</Link>{" "}
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Todolist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
