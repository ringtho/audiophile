import React from 'react'
import './Earphones.scss'
import { Navbar, Footer, Header, FooterBanner, Menu, ProductCard } from '../../components'

const Earphones = () => {
  return (
    <div>
      <Navbar />
      <Header page='earphones' />
      <div className='product-card'>
        <ProductCard />
      </div>
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
