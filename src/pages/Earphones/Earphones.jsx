import React from 'react'
import './Earphones.scss'
import { Navbar, Footer, Header, FooterBanner, Menu } from '../../components'

const Earphones = () => {
  return (
    <div>
      <Navbar />
      <Header page="earphones" />
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

export default Earphones
