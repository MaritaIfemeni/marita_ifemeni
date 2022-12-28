import { useState } from "react";
import React from "react";

function Age() {
  const [person, setPerson] = useState({
    firstname: "",
    age: "",
  });

  const showAlert = () => {
    if (person.age < 18) {
      alert("You are too young");
    } else {
        alert(`Hello ${person.firstname}`);
    }
  };
  const inputChanged = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  return (
    <div>
      Name: {person.firstname} {person.lastname} Age: {person.age}
      <br />
      <input
        placeholder="First name"
        name="firstname"
        value={person.firstname}
        onChange={inputChanged}
      />
      <input
        placeholder="Age"
        name="age"
        value={person.age}
        onChange={inputChanged}
      />
      <button onClick={showAlert}>Submit</button>
    </div>
  );
}

export default Age;
