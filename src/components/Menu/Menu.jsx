import React from 'react'
import './Menu.scss'
import MenuItem from './MenuItem/MenuItem'
import images from '../../constants/images'

const Menu = () => {
  return (
    <div className='menu__wrapper'>
      <MenuItem image={images.headphonesCategory} title='headphones' />
      <MenuItem image={images.speakersCategory} title='speakers' />
      <MenuItem image={images.earphonesCategory} title='earphones' />
    </div>
  )
}

export default Menu
