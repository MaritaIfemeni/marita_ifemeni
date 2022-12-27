import { useState } from "react";
import React from "react";

function Multipleuserinput() {
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const showAlert = () => {
    alert(`Hello ${person.firstname} ${person.lastname}`);
  };
  const inputChanged = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  
  return (
    <div>
      Name: {person.firstname} {person.lastname} Email: {person.email}
      <br />
      <input
        placeholder="First name"
        name="firstname"
        value={person.firstname}
        onChange={inputChanged}
      />
      <input
        placeholder="Last name"
        name="lastname"
        value={person.lastname}
        onChange={inputChanged}
      />
      <input
        placeholder="Email"
        name="email"
        value={person.email}
        onChange={inputChanged}
      />
      <button onClick={showAlert}>Submit</button>
    </div>
  );
}

export default Multipleuserinput;
