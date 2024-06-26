import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/';
import About from './pages/About/';
import Homestay from './pages/Homestay/';
import Error from './pages/Error/';
import Header from './components/Header/';
import './styles/General.scss';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Homestay/:homestayId' element={<Homestay />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

