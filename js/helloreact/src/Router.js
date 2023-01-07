import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Todolist from "./components/Todolist";
import Todolistgrid from "./components/Todolistgrid";
import NotFound from "./components/Notfound";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">
              <nav>
                <Link to="/">Home</Link> <Link to="/About">About</Link>{" "}
                <Link to="/Contact">Contact</Link>{" "}
                <Link to="/Todolist">To Do App</Link>{" "}
                <Link to="/Todolistgrid">To Do App Grid</Link>{" "}
              </nav>
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/todolistgrid" element={<Todolistgrid />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
