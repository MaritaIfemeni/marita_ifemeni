import React from "react";
import { useState } from "react";

const Set = () => {
    const [todos, setTodos] = useState(0);

    const add = () => {
        setTodos((c) => c + 6);
    }
    return (
        <>
        <form>
            <label>Enter your task that needs to be complited:
            < input type="text" />
            </label>
        </form>

        <div>
          Todoes: {todos}
          <button onClick={add}>Add Task To Do</button>
        </div>
      </>
      );
    
};


export default Set;