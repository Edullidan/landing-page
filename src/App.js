import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import Repo from "./components/Repo";

function App() {
  const [repositories, setRepositories] = useState([]);

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
      <Route path='/repo/:id' element={<Repo />}></Route>
    </Routes>
  );
}

export default App;
