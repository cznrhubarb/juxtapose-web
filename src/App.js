import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import FreePlay from './FreePlay';

function App() {
  return (
    <ChakraProvider>
      <FreePlay />
    </ChakraProvider>
  );
}

export default App;
