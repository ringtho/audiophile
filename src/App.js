import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Earphones, Headphones, Home, Speakers, ProductDetail } from './pages'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Speakers />} path='/speakers' />
        <Route element={<Headphones />} path='headphones' />
        <Route element={<Earphones />} path='earphones' />
        <Route element={<ProductDetail />} path='/:category/:id' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
