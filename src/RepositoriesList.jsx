// RepositoriesPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { each } from 'jquery';
import Btns from './button';

function RepositoriesList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/kenneth256/repos')
      .then(response => {
        setRepositories(response.data);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  }, []);

  return (
    <div style={{display: 'flex',marginLeft:'10px', flexDirection:'column', color:''}}>
      <h1>My GitHub Repositories</h1>
      <Btns />
      <ul>
        {repositories.map(each => (
          <li key={each.id} style={{marginLeft: '10px'}}>
            <Link to={`/repo/${each.id}`}>{each.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoriesList;
