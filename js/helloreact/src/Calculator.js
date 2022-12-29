import React, { useState } from "react";

function Calulator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  function calculateTotalSum() {
    setTotal(number1 + number2);
  }

  function calculateTotalMinus() {
    setTotal(number1 - number2);
  }

  return (
    <div>
      <h2>+ and - Calculator</h2>
      <input
        placeholder="First Number"
        type="number"
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
      />
      <input
        placeholder="Second Number"
        type="number"
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
      />

      <button onClick={calculateTotalSum}>+</button>
      <button onClick={calculateTotalMinus}>-</button>
      <p>
        Total: {total}
      </p>
    </div>
  );
}

export default Calulator;
