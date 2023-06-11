import React from 'react'
import { Link } from 'react-router-dom'
import './Headphones.scss'

const Headphones = () => {
  return (
    <div>
      Headphone
      <Link to='/speakers'>Speakers</Link>
      <Link to='/earphones'>Earphones</Link>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Headphones
