import { Box, ChakraProvider } from '@chakra-ui/react';
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Box minHeight={'100vh'}>
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
