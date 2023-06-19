import React from 'react'
import './Headphones.scss'
import { Navbar, Footer, Header, FooterBanner, Menu, ProductCard } from '../../components'
import images from '../../constants/images'

const Headphones = () => {
  return (
    <div>
      <Navbar />
      <Header page="headphones" />
      <div className='product-card'>
        <ProductCard
          image={images.xx59Category}
          title='XX59 Headphones'
          description='Enjoy your audio almost anywhere
          and customize it to your specific tastes with
          the XX59 headphones. The stylish yet durable
          versatile wireless headset is a brilliant
          companion at home or on the move.'
          newProduct={true}
        />
        <ProductCard
          image={images.xx59Category}
          title= 'XX59 Headphones'
          description='Enjoy your audio almost anywhere
          and customize it to your specific tastes with
          the XX59 headphones. The stylish yet durable
          versatile wireless headset is a brilliant
          companion at home or on the move.'
        />
        <ProductCard
          image={images.xx59Category}
          title= 'XX59 Headphones'
          description='Enjoy your audio almost anywhere
          and customize it to your specific tastes with
          the XX59 headphones. The stylish yet durable
          versatile wireless headset is a brilliant
          companion at home or on the move.'
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

export default Headphones
