import React, { useState, useEffect } from "react";
import "./App.css";

function Quiz() {
  const [question, setQuestion] = useState();

  const fetchData = () => {
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((resData) => setQuestion(resData.results[0].question));
  };

  return (
    <div className="App">
   {question ? question : ""}
   <br></br>
      <button onClick={fetchData}>New question</button>
    </div>
  );
}

export default Quiz;
