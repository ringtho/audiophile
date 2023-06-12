import React from 'react'
import './Home.scss'
import { Navbar, Footer, Hero, Menu, HomeProducts } from '../../components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <HomeProducts />
      <Footer />
    </div>
  )
}

export default Home
