import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TipProvider } from './context/TipContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <TipProvider>
    <App />
  </TipProvider>
);
