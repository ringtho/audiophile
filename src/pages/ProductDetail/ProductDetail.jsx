import React from 'react'
import './ProductDetail.scss'
import { Navbar, Footer, FooterBanner, Menu } from '../../components'

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
        Product Detail Page
      <div className='menu'>
        <Menu />
      </div>
      <div className='footer-banner'>
        <FooterBanner />
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetail
