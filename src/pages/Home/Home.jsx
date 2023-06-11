import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import { Navbar, Footer } from '../../components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Link to='speakers'>Speakers</Link>
      <Link to='earphones'>Earphones</Link>
      <Link to='headphones'>Headphones</Link>
      <Footer />
    </div>
  )
}

export default Home
