import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../index'
import './ProductCard.scss'

const ProductCard = ({ image, title, description, newProduct }) => {
  return (
    <div className='product__container'>
        <div className='product__image-wrapper'>
          <img src={image} alt={title} />
        </div>
        <div className='product__details'>
          <h2>{title}</h2>
          <p>{description}</p>
          <Button text="see product" />
        </div>
    </div>
  )
}

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  newProduct: PropTypes.bool
}

export default ProductCard
