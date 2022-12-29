import React, { useEffect, useState } from "react";
import "./App.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((resData) => setUsers(resData.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
