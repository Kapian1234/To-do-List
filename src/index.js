import React from 'react';
import ReactDOM from 'react-dom/client';
import BaseRouter from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BaseRouter />
  </React.StrictMode>
);