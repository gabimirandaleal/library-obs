import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import Card from './components/card';
import SearchBar from './components/searchbar';

function App() {
  const [resposta, setResponse] = useState([]);
 
  return (
    <Box>
      <SearchBar setResponse={setResponse}/>
      {        
        resposta.map((item, index) => (
          <Card key={index} item={item} />
        ))
      }
    </Box>
  );
}

export default App;
