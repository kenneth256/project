
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { FaHome } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function RepoDetails() {
  const { repoId } = useParams();
  const [repository, setRepository] = useState(null);
  const [reposList, setReposList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/kenneth256/repos`)
      .then((response) => {
        setReposList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  }, []);

  useEffect(() => {
    if (reposList.length > 0) {
      const index = reposList.findIndex((repo) => repo.id === parseInt(repoId));
      setCurrentIndex(index);
      setRepository(reposList[index]);
    }
  }, [repoId, reposList]);

  const goToPreviousRepo = () => {
    if (currentIndex > 0) {
      const prevRepoId = reposList[currentIndex - 1].id;
      navigate(`/repo/${prevRepoId}`);
    }
  };

  const goToNextRepo = () => {
    if (currentIndex < reposList.length - 1) {
      const nextRepoId = reposList[currentIndex + 1].id;
      navigate(`/repo/${nextRepoId}`);
    }
  };

  if (!repository) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Details">
      <h2 style={{textDecoration:'underline'}}>{repository.name}</h2>
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

      <div className="buttons">
        {" "}
        <button className="dir" onClick={goToPreviousRepo}>
          <FaArrowLeft/>
        </button>
        <a href="/">
          <button className="home">
            <Icon as={FaHome} />
          </button>
        </a>
        <button className="dir1" onClick={goToNextRepo}>
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
}

export default RepoDetails;
