import React, { useState } from "react";
import "./App.css";
import TodoTable from "./TodoTable";

function App() {
  const [todo, setTodo] = useState({ description: "", date: "" });

  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "" }); // Clear todo
  };

  const deleteTodo = (row) => {
    console.log("Delete row: " + row);
    setTodos(todos.filter((todo, index) => index !== row));
  };

  return (
    <div className="App">
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
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
