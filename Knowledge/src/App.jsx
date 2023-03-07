import { Box, ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import LandingPage from './pages/LandingPage';
import SpecialBrief from './pages/SpecialBrief';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Box minHeight={'100vh'}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/special-brief" element={<SpecialBrief />} />
          </Routes>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
