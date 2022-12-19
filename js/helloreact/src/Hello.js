import React, { useState } from "react";

function Hello() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Hello World");
  const mystyle = {
    color:color
};

  return (
    <div>
      <div style={mystyle}>{text}</div>
      <button onClick={() => setColor("red")}>Change color</button>
    </div>
  );
}

export default Hello;
