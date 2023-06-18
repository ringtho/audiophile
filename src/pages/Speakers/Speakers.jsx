import React from 'react'
import './Speakers.scss'
import { Navbar, Footer, Header, FooterBanner, Menu } from '../../components'

const Speakers = () => {
  return (
    <div>
      <Navbar />
      <Header page="speakers" />
      Speakers
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

export default Speakers
