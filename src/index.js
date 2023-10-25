import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Jika Anda ingin mengukur kinerja aplikasi Anda, Anda dapat menggunakan fungsi
// reportWebVitals untuk melakukannya.
reportWebVitals();
