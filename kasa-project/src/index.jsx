import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Error from './pages/Error/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Error />}></Route>

      </Routes>
    </Router>
  </React.StrictMode>
);

