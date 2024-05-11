// src/App.js
import React from 'react';
import AppRouter from './routing/AppRouter'; // Adjust the path based on your project structure
import { AuthProvider } from './context/AuthContext';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider 20240426

function App() {
  return (
    <ChakraProvider> {/* Wrap the inner components with ChakraProvider */}
      <AuthProvider>
        <div className="App">
          <AppRouter />
        </div>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
