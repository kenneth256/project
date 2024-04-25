// import React, { useState } from 'react';
// import { Box, Input, Button, List, ListItem, Flex, IconButton } from '@chakra-ui/react';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

// function Btns() {
//   // State
//   const [repositories, setRepositories] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   // Event handlers
//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleCreateRepo = () => {
//     if (!inputValue.trim()) return;

//     const newRepo = {
//       name: inputValue,
//       id: Date.now(),
//     };

//     setRepositories((prevRepos) => [...prevRepos, newRepo]);
//     setInputValue('');
//   };

//   const handleDelete = (id) => {
//     setRepositories((prevRepos) => prevRepos.filter((repo) => repo.id !== id));
//   };

//   const handleEdit = (id) => {
//     const newName = prompt('Enter new name for the repository:', repositories.find(repo => repo.id === id)?.name);
//     if (newName !== null) {
//       setRepositories((prevRepos) =>
//         prevRepos.map((repo) =>
//           repo.id === id ? { ...repo, name: newName } : repo
//         )
//       );
//     }
//   };

//   // Render UI
//   return (
//     <Box id="app" textAlign="center" pt={10}>
//       <Input
//         type="text"
//         id="repoName"
//         className="repoName"
//         placeholder="Enter repository name"
//         value={inputValue}
//         onChange={handleChange}
//         mr={2}
//       />
//       <Button onClick={handleCreateRepo} colorScheme="teal">Create Repository</Button>

//       <List mt={8} maxW="sm" m="auto">
//         {repositories.map((repo) => (
//           <ListItem key={repo.id} textAlign="left">
//             <Flex justifyContent="space-between" alignItems="center">
//               <Box>{repo.name}</Box>
//               <Box>
//                 <IconButton
//                   icon={<DeleteIcon />}
//                   colorScheme="red"
//                   variant="outline"
//                   aria-label="Delete Repository"
//                   onClick={() => handleDelete(repo.id)}
//                   mr={2}
//                 />
//                 <IconButton
//                   icon={<EditIcon />}
//                   colorScheme="blue"
//                   variant="outline"
//                   aria-label="Edit Repository"
//                   onClick={() => handleEdit(repo.id)}
//                 />
//               </Box>
//             </Flex>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// }

// export default Btns;
import React, { useState } from 'react';
import { Box, Input, Button, List, ListItem, Flex, IconButton } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

function Btns({ onCreateRepo }) {
  // State
  const [inputValue, setInputValue] = useState('');

  // Event handlers
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCreateRepo = () => {
    if (!inputValue.trim()) return;

    const newRepo = {
      name: inputValue,
      id: Date.now(),
    };

    onCreateRepo(newRepo);
    setInputValue('');
  };

  // Render UI
  return (
    <Box id="app" textAlign="center" pt={10}>
      <Input
        type="text"
        id="repoName"
        className="repoName"
        placeholder="Enter repository name"
        value={inputValue}
        onChange={handleChange}
        mr={2}
      />
      <Button onClick={handleCreateRepo} colorScheme="teal">Create Repository</Button>
    </Box>
  );
}

export default Btns;
