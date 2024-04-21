// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import { ChakraProvider } from '@chakra-ui/react';
// import RepositoriesList from './RepositoriesList';
// import RepoDetails from './RepoDetails';
// import ErrorBoundary from './ErrorBoundary';
// import NotFoundPage from './NotFoundPage';

// function App() {
//   const [repositories, setRepositories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRepositories = async () => {
//       try {
//         const response = await axios.get('https://api.github.com/users/your-username/repos');
//         setRepositories(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching repositories:', error);
//         setLoading(false);
//       }
//     };

//     fetchRepositories();
//   }, []);

//   return (
//     <ChakraProvider>
//     <Box
//       w="200px"
//       h="200px"
//       bg="white"
//       boxShadow="lg" // Predefined shadow preset (large shadow)
//       // Alternatively, you can use custom values:
//       // boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" // Custom shadow
//     >
//       <Router>
//         <ErrorBoundary> {/* ErrorBoundary wraps all Routes */}
//           <Routes>
//           <Route exact path="/" element={<RepositoriesList/>} />
//           <Route path="/repo/:repoId" element={<RepoDetails/>} />
//           <Route element={<NotFoundPage/>} />
//           </Routes>
           
//         </ErrorBoundary>
//       </Router>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;

import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepositoriesList from './RepositoriesList';
import RepoDetails from './RepoDetails';
import NotFoundPage from './NotFoundPage';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ChakraProvider>
      <Box
        w="50vh"
        bg="white"
        boxShadow="lg"
        mx="auto"
        mt="50px"
        p="4"
      >
        <Router>
          <ErrorBoundary>
            <Routes>
              <Route exact path="/" element={<RepositoriesList />} />
              <Route path="/repo/:repoId" element={<RepoDetails />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;

