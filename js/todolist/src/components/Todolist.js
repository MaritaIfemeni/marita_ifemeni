import React, { useState } from "react";
import "../App.css";
import TodoTable from "./TodoTable";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import ReactiveButton from 'reactive-button';

function Todolist() {
  const [todo, setTodo] = useState({ description: "", date: "", status: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "", status: "" });
  };


  return (
    <div className="App">
      <br></br>
      <input
        placeholder="Description"
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />
      <input
        placeholder="Date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <input
        placeholder="Status"
        name="status"
        value={todo.status}
        onChange={inputChanged}
      />
       <ReactiveButton color="yellow" onClick={addTodo}>Add</ReactiveButton>
      <div>
        <TodoTable todos={todos} />
      </div>
    </div>
  );
}

export default Todolist;
