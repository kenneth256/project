
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
        w="60vh"
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

