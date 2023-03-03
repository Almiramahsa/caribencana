import { Box, ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Box minHeight={'100vh'}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
