import { useState } from "react";
import React from "react";

function Userinput() {
  const [name, setName] = useState("");

  const inpputChanged = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      {name}
      <br />
      <input value={name} onChange={inpputChanged} />
    </div>
  );
}

export default Userinput;
