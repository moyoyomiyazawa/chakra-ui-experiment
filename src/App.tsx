import React from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <ChakraProvider>
        <Button colorScheme='teal'>ボタン</Button>
      </ChakraProvider>
    </div>
  );
}

export default App;
