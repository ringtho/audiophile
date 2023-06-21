import React from 'react'
import './Earphones.scss'
import { Navbar, Footer, Header, FooterBanner, Menu, ProductCard } from '../../components'
import images from '../../constants/images'

const Earphones = () => {
  return (
    <div>
      <Navbar />
      <Header page='earphones' />
      <div className='product-card'>
        <ProductCard
          image={images.yx1Category}
          title='YX1 WIRELESS
          EARPHONES'
          description='Tailor your listening experience with bespoke
          dynamic drivers from the new YX1 Wireless Earphones.
          Enjoy incredible high-fidelity sound even in noisy environments
          with its active noise cancellation feature.'
          newProduct={true}
        />
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
