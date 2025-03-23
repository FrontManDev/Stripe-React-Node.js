import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobaleContext } from './components/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobaleContext>
      <App />
    </GlobaleContext>
  </React.StrictMode>
);