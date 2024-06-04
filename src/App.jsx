
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from './About';
import Services from './Services';
import Footer from './Footer';
import Projects from './Projects';

function App() {
return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contact" element={<Footer/>}/>
        <Route path="/Project" element={<Projects/>}/>
     
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
