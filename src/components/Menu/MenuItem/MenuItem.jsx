import React from 'react'
import images from '../../../constants/images'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MenuItem = ({ image, title }) => {
  return (
    <>
      <div className='menu__container'>
        <div className='menu__thumbnail'>
          <img src={image} alt='category' />
        </div>
        <div className='menu__info'>
          <div className='menu__info-container'>
            <h3>{title}</h3>
            <Link className='menu__link' to={`/${title}`}>
              <h4>SHOP</h4>
              <img
                src={images.arrowRight}
                alt='arrow-right'
                className='arrow-right'
              />
            </Link>
           </div>
        </div>
      </div>
    </>
  )
}

MenuItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
}

export default MenuItem
