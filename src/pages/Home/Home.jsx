import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div>
      Home
      <Link to='speakers'>Speakers</Link>
      <Link to='earphones'>Earphones</Link>
      <Link to='headphones'>Headphones</Link>
    </div>
  )
}

export default Home
