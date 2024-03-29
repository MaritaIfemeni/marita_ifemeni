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
import Tooltip from "@mui/material/Tooltip";
import SaveIcon from "@mui/icons-material/Save";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

function Todolistgrid() {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const TextFieldChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "" }); // clear the textfields
  };

  const columns: GridColDef[] = [
    { field: "description", headerName: "Description", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
  ];

  const rows = todos.map((todo, index) => {
    return { id: index, description: todo.description, date: todo.date };
  });

  return (
    <div className="App">
      <AppBar className="todo" position="static">
        <Toolbar>
          <Typography variant="h6">My Todolist Grid</Typography>
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
        <Button variant="outlined" startIcon={<SaveIcon />} onClick={addTodo}>
          Add
        </Button>
      </Stack>
      <div style={{ height: 300, width: "40%", margin: "auto" }}>
        <DataGrid className="App" rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default Todolistgrid;
