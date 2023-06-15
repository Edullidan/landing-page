import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Repo({ repository, setRepository }) {
  const { id } = useParams();

  useEffect(() => {
    const fetchRepository = async () => {
      const response = await fetch(`https://api.github.com/repositories/${id}`);
      const data = await response.json();
      setRepository(data);
    };

    fetchRepository();
  }, [id, setRepository]);

  if (!repository) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Repository Details</h2>
      <p>Repository ID: {repository.id}</p>
      <p>Repository Name: {repository.name}</p>
      <p>Repository Description: {repository.description}</p>
    </div>
  );
}

export default Repo;
