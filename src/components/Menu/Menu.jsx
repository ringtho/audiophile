import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'
import images from '../../constants/images'

const Menu = () => {
  return (
    <div className='menu__wrapper'>
      <div className='menu__container'>
        <div className='menu__thumbnail'>
          <img src={images.earphonesCategory} alt='category' />
        </div>
        <div className='menu__info'>
          <div className='menu__info-container'>
            <h3>Speakers</h3>
            <Link className='menu__link' to=''>
              <h4>SHOP</h4>
              <img src={images.arrowRight} alt='arrow-right' className='arrow-right' />
            </Link>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
