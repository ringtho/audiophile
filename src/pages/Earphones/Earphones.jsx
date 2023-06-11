import React from 'react'
import { Link } from 'react-router-dom'
import './Earphones.scss'

const Earphones = () => {
  return (
    <div>
      Earphones
      <Link to='/speakers'>Speakers</Link>
      <Link to='/'>Home</Link>
      <Link to='/headphones'>Headphones</Link>
    </div>
  )
}

export default Earphones
