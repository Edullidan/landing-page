import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [repositories, setRepositories] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${search}`
    );
    const data = await response.json();
    setRepositories(data.items);
  };

  return (
    <div>
      <h1>Github Repository Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
