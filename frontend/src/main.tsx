import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import custom css
import './index.css';
import App from './App.tsx';

import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);