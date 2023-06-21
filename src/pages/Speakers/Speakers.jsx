import React from 'react'
import './Speakers.scss'
import { Navbar, Footer, Header, FooterBanner, Menu, ProductCard } from '../../components'
import images from '../../constants/images'

const Speakers = () => {
  return (
    <div>
      <Navbar />
      <Header page="speakers" />
      <div className='product-card'>
        <ProductCard
          image={images.zx9Category}
          title='ZX9 SPEAKER'
          description='Upgrade your sound system with the all new
          ZX9 active speaker. It’s a bookshelf speaker system
          that offers truly wireless connectivity -- creating new
          possibilities for more pleasing and practical audio setups.'
          newProduct={true}
        />
        <ProductCard
          image={images.zx7Category}
          title='ZX7 SPEAKER'
          description='Stream high quality sound wirelessly with minimal loss.
          The ZX7 bookshelf speaker uses high-end audiophile components
          that represents the top of the line powered speakers for home or studio use.'
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

export default Speakers
