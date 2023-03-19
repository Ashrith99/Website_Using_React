import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer'; 

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        <Footer /> 
      </Router>
    </>
  );
}

export default App;


