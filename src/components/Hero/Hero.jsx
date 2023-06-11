import React from 'react'
import './Hero.scss'
import images from '../../constants/images'

const Hero = () => {
  return (
    <div className='hero__wrapper'>
      <div className='hero__info'>
        <h3 className='hero__product'>NEW PRODUCT</h3>
        <h1 className='hero__title'>XX99 MARK II HEADPHONES</h1>
        <p className='hero__desc'>
        Experience natural, lifelike audio and exceptional build
        quality made for the passionate music enthusiast.
        </p>
        <button>
            SEE PRODUCT
        </button>
      </div>
      <div className='hero__image'>
        <img src={images.hero} alt='hero-image' />
      </div>
    </div>
  )
}

export default Hero
