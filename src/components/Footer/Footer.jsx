import React from 'react'
import './Footer.scss'
import images from '../../constants/images'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer__wrapper'>
      <hr />
      <div className='footer__nav'>
        <div className='footer__image'>
          <img src={images.logo} alt='logo' />
        </div>
        <div className='footer__ul'>
          <ul className='footer__menu'>
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
      </div>

      <div className='footer__details'>
        <div className='footer__info'>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio.
            Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className='footer__buttons large'>
            <Link>
              <i className='fa-brands fa-square-facebook'></i>
            </Link>
            <Link>
              <i className='fa-brands fa-twitter'></i>
            </Link>
            <Link>
              <i className='fa-brands fa-instagram'></i>
            </Link>
          </div>
        </div>
        <div className='footer__copyright'>
          <p>Copyright 2023. All Rights Reserved</p>

          <div className='footer__buttons small'>
            <Link>
              <i className='fa-brands fa-square-facebook'></i>
            </Link>
            <Link>
              <i className='fa-brands fa-twitter'></i>
            </Link>
            <Link>
              <i className='fa-brands fa-instagram'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
