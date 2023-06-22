import React from 'react'
import './ProductDetail.scss'
import { Navbar, Footer, FooterBanner, Menu, Recommended, ProductInfo } from '../../components'

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
        Product Detail Page
      <div className='product-info'>
        <ProductInfo />
      </div>
      <div className='recommended'>
        <Recommended />
      </div>
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
