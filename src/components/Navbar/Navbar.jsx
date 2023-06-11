import React from 'react'
import './Navbar.scss'
import images from '../../constants/images'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar__wrapper'>
      <div className='navbar__hamburger'>
        <img src={images.hamburgerMenu} alt='hamburger' className='hamburger'/>
      </div>
      <div className='navbar__logo'>
        <img src={images.logo} alt='logo' className='logo'/>
      </div>
      <div className='navbar__ul'>
        <ul className='navbar__menu'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/headphones'>
            <li>Headphones</li>
          </Link>
          <Link to='/speakers'>
            <li>Speakers</li>
          </Link>
          <Link to='/earphones'>
            <li>Earphones</li>
          </Link>
        </ul>
      </div>
      <div>
        <img src={images.cart} alt='cart-icon' className='cart' />
      </div>
    </div>
  )
}

export default Navbar
