import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import Repo from "./components/Repo";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [repository, setRepository] = useState(null);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <SearchForm
            repositories={repositories}
            setRepositories={setRepositories}
          />
        }
      ></Route>
      <Route
        path='/repo/:id'
        element={<Repo repository={repository} setRepository={setRepository} />}
      ></Route>
    </Routes>
  );
}

export default App;
