import React from 'react'
import { Link } from 'react-router-dom'
import './Speakers.scss'

const Speakers = () => {
  return (
    <div>
      Speakers
      <Link to='/'>Home</Link>
      <Link to='/earphones'>Earphones</Link>
      <Link to='/headphones'>Headphones</Link>
    </div>
  )
}

export default Speakers
