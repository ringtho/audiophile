import React from 'react'
import { Link } from 'react-router-dom'
import './Headphones.scss'
import { Navbar, Footer } from '../../components'

const Headphones = () => {
  return (
    <div>
      <Navbar />
      Headphone
      <Link to='/speakers'>Speakers</Link>
      <Link to='/earphones'>Earphones</Link>
      <Link to='/'>Home</Link>
      <Footer />
    </div>
  )
}

export default Headphones
