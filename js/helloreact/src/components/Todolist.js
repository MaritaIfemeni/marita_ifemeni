import React, { useState } from "react";
import "../App.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Todolist() {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const TextFieldChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  };

  return (
    <div className="App">
      <AppBar className="todo" position="static">
        <Toolbar>
          <Typography variant="h6">My Todolist</Typography>
        </Toolbar>
      </AppBar>
      <Stack
        direction="row"
        spacing={2}
        mt={2}
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          variant="standard"
          label="Description"
          name="description"
          value={todo.description}
          onChange={TextFieldChanged}
        />
        <TextField
          variant="standard"
          label="Date"
          name="date"
          value={todo.date}
          onChange={TextFieldChanged}
        />
        <Button variant="outlined" onClick={addTodo}>
          Add
        </Button>
      </Stack>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => deleteTodo(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;
