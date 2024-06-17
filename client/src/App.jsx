import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Publish from './pages/Publish'
import Stories from './pages/Stories'
import './index.css'


export default function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/sign-in" element={<SignIn />} />
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/publish" element={<Publish />} />
      <Route exact path="/stories" element={<Stories />} />
    </Routes>
    </BrowserRouter>
    
    </>
   
  )
}
