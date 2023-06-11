import React from 'react'
import { Link } from 'react-router-dom'
import './Earphones.scss'
import { Navbar, Footer } from '../../components'

const Earphones = () => {
  return (
    <div>
      <Navbar />
      Earphones
      <Link to='/speakers'>Speakers</Link>
      <Link to='/'>Home</Link>
      <Link to='/headphones'>Headphones</Link>
      <Footer />
    </div>
  )
}

export default Earphones
