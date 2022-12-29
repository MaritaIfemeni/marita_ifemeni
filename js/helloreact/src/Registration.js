import React, { useState } from "react";

function Registration() {
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const inputChanged = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const showAlert = () => {
    if (person.firstname === "") {
      alert("Fill all fields!");
    } else if (person.lastname === "") {
      alert("Fill all fields!");
    } else if (person.email === "") {
      alert("Fill all fields!");
    } else if (person.phone === "") {
      alert("Fill all fields!");
    } else {
      alert(`Hello ${person.firstname} ${person.lastname}`);
    }
  };

  const formSubmitted = (event) => {
    event.preventDefault();
    showAlert();
    // Do somethin with you data
  };

  return (
    <div>
      <br />
      <form onSubmit={formSubmitted}>
        <br></br>
        <input
          placeholder="First name"
          name="firstname"
          type="text"
          value={person.firstname}
          onChange={inputChanged}
        />
         <br></br>
        <input
          placeholder="Last name"
          name="lastname"
          type="text"
          value={person.lastname}
          onChange={inputChanged}
        />
         <br></br>
        <input
          placeholder="Email"
          name="email"
          type="text"
          value={person.email}
          onChange={inputChanged}
        />
         <br></br>
        <input
          placeholder="Phone"
          name="phone"
          type="text"
          value={person.phone}
          onChange={inputChanged}
        />
         <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Registration;
