import React from 'react'
import './app.css'
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Services from './Component/Services';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Services/>
  
    </>
  )
}

export default App