import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTodo from './AddTodo';

import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Bookstore from './Bookstore';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = () => {
    fetch("https://todolist-d8353-default-rtdb.firebaseio.com/items/.json")
    .then(response => response.json())
    .then(data => addKeys(data))
    .catch(err => console.error(err))
  }

  // Add keys to the todo objects
  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) => 
    Object.defineProperty(item, 'id', {value: keys[index]}));
    setTodos(valueKeys);
  }

  const addTodo = (newTodo) => {
     fetch("https://todolist-d8353-default-rtdb.firebaseio.com/items/.json",
    {
      method: 'POST',
      body: JSON.stringify(newTodo)
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }

  const deleteTodo = (id) => {
    fetch(`https://todolist-d8353-default-rtdb.firebaseio.com/items/${id}.json`,
    {
      method: 'DELETE',
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" noWrap> 
            TodoList
          </Typography>
        </Toolbar>
      </AppBar> 
      <AddTodo addTodo={addTodo} /> 
      <div className="ag-theme-material" style={ { height: 400, width: 700, margin: 'auto' } }>
        <AgGridReact rowData={todos}>
          <AgGridColumn sortable={true} filter={true} field='description' />
          <AgGridColumn sortable={true} filter={true} field='date' />
          <AgGridColumn sortable={true} filter={true} field='priority' />
          <AgGridColumn 
            headerName=''
            field='id' 
            width={90}
            cellRenderer={ params => 
              <IconButton onClick={() => deleteTodo(params.value)} size="small" color="error">
                <DeleteIcon />
              </IconButton>
            }
          />      
        </AgGridReact>
      </div>
      <Bookstore />
    </div>
  );
}

export default App;