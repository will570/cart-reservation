import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import { StyledEngineProvider } from '@mui/material/styles';

import App from './App'; 
import { AuthProvider } from './contexts/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <AuthProvider>
            <App />
        </AuthProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);