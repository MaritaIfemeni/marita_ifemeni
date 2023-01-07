import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Todolist from "./components/Todolist";
import NotFound from "./components/Notfound";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/About">About</Link>{" "}
          <Link to="/Contact">Contact</Link>{" "}
          <Link to="/Todolist">To Do App</Link>{" "}
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
