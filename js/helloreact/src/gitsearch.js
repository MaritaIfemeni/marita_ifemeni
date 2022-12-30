import React, { useState, useEffect } from "react";
import "./App.css";

function Gitsearch() {
  const [search, setSearch] = useState();
  const [repo, setRepos] = useState([]);

  const fetchData = () => {
    fetch("https://api.github.com/search/repositories?q=" + search)
      .then((response) => response.json())
      .then((resData) => setRepos(resData.items))
      .catch((err) => console.error(err));
  };

  const inpputChanged = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <h1>Repositories</h1>
      <input value={search} onChange={inpputChanged} />
      <button onClick={fetchData}>Fetch</button>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Repositories</th>
          </tr>
          {repo.map((repo, index) => (
            <tr key={index}>
              <td>{repo.full_name}</td>
              <td>
                <a href={repo.url}>{repo.url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Gitsearch;
