import { Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { Typography } from '@mui/material';
import './App.css';
import useHabbitStore from './store/Store';
import AddHabbit from './components/AddHabbit';
import List from './components/List';

function App() {
  const storeValues=useHabbitStore();
  console.log(storeValues);
  
  return (
   <Container>
    <Box>
    <Typography variant="h4" component="h2" align='center'>
       hello
    </Typography>
    {/* // from */}
    <AddHabbit/>
    <List/>
    </Box>
   </Container>
  );
}

export default App;
