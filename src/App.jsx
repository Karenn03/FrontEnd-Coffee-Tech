import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import LandingPage from './pages/Landing Page/LandingPage'

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App