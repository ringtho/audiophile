import React from 'react'
import './Headphones.scss'
import { Navbar, Footer, Header, FooterBanner, Menu } from '../../components'

const Headphones = () => {
  return (
    <div>
      <Navbar />
      <Header page="headphones" />
      <div className='menu-category'>
        <Menu />
      </div>
      <div className='footer-banner-category'>
        <FooterBanner />
      </div>
      <Footer />
    </div>
  )
}

export default Headphones
