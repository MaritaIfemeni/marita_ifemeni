import React from "react";
import { useState } from "react";

const Set = () => {
  const [todos, setTodos] = useState("");
  const add = () => {
    setTodos((c) => listOfFreeSpots);
  };

  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log("value is:", event.target.value);
  };
  const listOfFreeSpots = [
    "Aurinkokiven koulu",
    "Keravan asema",
    "Jumbon Parkkialue",
    "Pielaveden K-Marketti",
  ];
  return (
    <>
      <div>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
        />

        <h2>Tasks: {message}</h2>
        <button onClick={handleChange}>Log message</button>
      </div>
      <form>
        <label>
          Enter your task that needs to be complited:
          <input type="text" />
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
