import { useState } from "react";
import { Link } from "react-router-dom";

function SearchForm({ repositories, setRepositories }) {
  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${search}`
    );
    const data = await response.json();
    console.log(data);
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
          <li key={repo.id}>
            <Link to={`/repo/${repo.id}`} target='_blank'>
              {repo.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchForm;
