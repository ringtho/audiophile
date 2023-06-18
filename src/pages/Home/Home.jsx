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
      <div className='menu'>
        <Menu />
      </div>
      <div className='home-products'>
        <HomeProducts />
      </div>
      <div className='footer-banner'>
        <FooterBanner />
      </div>
      <Footer />
    </div>
  )
}

export default Home
