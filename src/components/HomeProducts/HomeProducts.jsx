import React from 'react'
import './HomeProducts.scss'
import { Button } from '../index'
import images from '../../constants/images'

const HomeProducts = () => {
  return (
    <div className='products__container'>
        <div className='products__wrapper'>
            <div className='products__circles'>
              <img src={images.homeCircles} alt='circles' />
            </div>

            <div className='products'>
              <div className='products__image'>
                <img src={images.headphonesZX9} alt='product-image' />
              </div>
              <div className='products__details'>
                  <h2 className='products__title'>ZX9 <br/>SPEAKER</h2>
                  <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                  <Button text='see product' />
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomeProducts
