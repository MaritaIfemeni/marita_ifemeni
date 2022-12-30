import React, { useState, useEffect } from "react";
import "./App.css";

function Gitapi() {
  const [repo, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=react")
      .then((response) => response.json())
      .then((resData) => setRepos(resData.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Repositories</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Repositories</th>
          </tr>
          {repo.map((repo, index) => (
            <tr key={index}>
              <td>{repo.full_name}</td>
              <td><a href={repo.url}>{repo.url}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Gitapi;
