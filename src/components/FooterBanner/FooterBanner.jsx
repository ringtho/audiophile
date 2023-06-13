import React from 'react'
import './FooterBanner.scss'
import images from '../../constants/images'

const FooterBanner = () => {
  return (
    <div className='footerBanner__container'>
        <div className='footerBanner__image'>
          <img src={images.bestGearImg} alt='footer-banner-image' />
        </div>

        <div className='footerBanner__info'>
          <h2>Bringing you the <span>best</span> audio gear</h2>
          <p>
          Located at the heart of New York City, Audiophile is the premier
          store for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our store
          to meet some of the fantastic people who make Audiophile the best place to
          buy your portable audio equipment.
          </p>
        </div>
    </div>
  )
}

export default FooterBanner
