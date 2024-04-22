import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RepoDetails() {
  const { repoId } = useParams();
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repositories/${repoId}`)
      .then((response) => {
        setRepository(response.data);
      })
      .catch((error) => {
        console.error("Error fetching repository details:", error);
      });
  }, [repoId]);

  if (!repository) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Details">
      <h2>{repository.name}</h2>
      <p>Description: {repository.description}</p>
      <p>Stars: {repository.stargazers_count}</p>
      <p>Forks: {repository.forks}</p>
      <p>Language: {repository.language}</p>
      <p>Created At: {repository.created_at}</p>
      <p>Last Updated At: {repository.updated_at}</p>
      <p>
        License: {repository.license ? repository.license.name : "No License"}
      </p>
      <p>Owner: {repository.owner.login}</p>
      <p>Homepage: {repository.homepage || "No Homepage"}</p>
      <p>Size: {repository.size} KB</p>
      <p>Watchers: {repository.watchers}</p>
      <p>Subscribers: {repository.subscribers_count}</p>
      <p>Network Count: {repository.network_count}</p>
      <p>Open Issues: {repository.open_issues_count}</p>
      <p>Is Private: {repository.private ? "Yes" : "No"}</p>
      <p>Archived: {repository.archived ? "Yes" : "No"}</p>
      <div>
       
        <a href="https://charming-daifuku-b3a0de.netlify.app/">
        <button style={{backgroundColor:'rgba(0, 255, 0, 0.5)'}}>Homepage</button>
      </a>
       
      </div>
    </div>
  );
}

export default RepoDetails;

