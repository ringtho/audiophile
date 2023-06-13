import React from 'react'
import './Home.scss'
import {
  Navbar,
  Footer,
  Hero,
  Menu,
  HomeProducts,
  FooterBanner
} from '../../components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <HomeProducts />
      <FooterBanner />
      <Footer />
    </div>
  )
}

export default Home
