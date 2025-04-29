import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Criando a raiz do React para renderizar o aplicativo
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando o componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);