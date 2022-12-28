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

  const formSubmitted = (event) => {
    event.preventDefault();
    showAlert();
    // Do somethin with you data
  };

  return (
    <div>
      Name: {person.firstname} {person.lastname} Email: {person.email}
      <br />
      <form onSubmit={formSubmitted}>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Multipleuserinput;
