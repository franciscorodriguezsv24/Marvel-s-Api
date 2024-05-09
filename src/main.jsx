import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Characters from './pages/Characters.jsx';
import Series from './pages/Series.jsx';
import Comics from './pages/Comics.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
