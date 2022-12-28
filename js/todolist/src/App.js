import React, { useState } from "react";
import "./App.css";

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
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
