import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Earphones, Headphones, Home, Speakers } from './pages'
import { Navbar, Footer } from './components'

function App () {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Speakers />} path='/speakers' />
          <Route element={<Headphones />} path='headphones' />
          <Route element={<Earphones />} path='earphones' />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
