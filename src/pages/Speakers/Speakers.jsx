import React from 'react'
import { Link } from 'react-router-dom'
import './Speakers.scss'
import { Navbar, Footer } from '../../components'

const Speakers = () => {
  return (
    <div>
      <Navbar />
      Speakers
      <Link to='/'>Home</Link>
      <Link to='/earphones'>Earphones</Link>
      <Link to='/headphones'>Headphones</Link>
      <Footer />
    </div>
  )
}

export default Speakers
