import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css' 
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import CV from './components/CV'
import ProjectsList from './components/ProjectsList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
        <BrowserRouter>

        <Header/>
        <div className='mainContainer'>
        <NavBar/>
      <Routes>
        <Route path="/" element={  <AboutMe />} />
        <Route path="/projects" element={<ProjectsList />} />
        {/* <Route path="/cv" element={<CV />} /> */}

      </Routes> 
      </div>
    
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
