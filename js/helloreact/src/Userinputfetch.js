import React, { useState } from "react";
import "./App.css";

function Userinputfetch() {
  const [user, setUser] = useState({});
  const [userid, setUserid] = useState("");

  const fetchData = () => {
    fetch("https://reqres.in/api/users/" + userid)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Response status not ok");
        }

        return response.json();
      })
      .then((resData) => setUser(resData.data))
      .catch((err) => console.error(err));
  };

  const inputChanged = (event) => {
    setUserid(event.target.value);
  };

  return (
    <div className="App">
      <input placeholder="User ID" value={userid} onChange={inputChanged} />
      <button onClick={fetchData}>Fetch</button>
      <p>
        {user.first_name} {user.last_name} {user.email}
      </p>
    </div>
  );
}

export default Userinputfetch;
