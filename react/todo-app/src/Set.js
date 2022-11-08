import React from "react";
import { useState } from "react";

const Set = () => {
    const [todos, setTodos] = useState(0);

    const add = () => {
        setTodos((c) => c + 6);
    }
    return (
        <>
     
        <div>
          Todoes: {todos}
          <button onClick={add}>Add Task To Do</button>
        </div>
      </>
      );
    
};


export default Set;