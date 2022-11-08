import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { StyledEngineProvider } from '@mui/material/styles';

import App from './App'; 


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);