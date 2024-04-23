// // RepositoriesPage.jsx
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { each } from 'jquery';
// import Btns from './button';
// import $ from 'jquery';


// function RepositoriesList() {
//   const [repositories, setRepositories] = useState([]);

//   useEffect(() => {
//     axios.get('https://api.github.com/users/kenneth256/repos')
//       .then(response => {
//         setRepositories(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching repositories:', error);
//       });
//   }, []);

//   return (
//     <div style={{display: 'flex',marginLeft:'10px', flexDirection:'column', color:''}}>
//       <h1>My GitHub Repositories</h1>
//       <Btns />
//       <ul>
//         {repositories.map(each => (
//           <li key={each.id} style={{marginLeft: '10px'}}>
//             <Link to={`/repo/${each.id}`}>{each.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default RepositoriesList;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Btns from './button.jsx';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


function RepositoriesList() {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5); 

  useEffect(() => {
    axios.get(`https://api.github.com/users/kenneth256/repos?page=${currentPage}&per_page=${perPage}`)
      .then(response => {
        setRepositories(response.data);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  }, [currentPage, perPage]);

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column', color: '' }}>
      <h1>My GitHub Repositories</h1>
      <Btns />
      <ul>
        {repositories.map(repo => (
          <li key={repo.id} style={{ marginLeft: '10px' }}>
            <Link to={`/repo/${repo.id}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button  className='prevrepolist' onClick={goToPreviousPage} disabled={currentPage === 1}><FaArrowLeft/></button>
        <button className='nextrepolist' onClick={goToNextPage}><FaArrowRight/></button>
      </div>
    </div>
  );
}

export default RepositoriesList;
