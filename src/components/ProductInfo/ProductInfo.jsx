import React from 'react'
import './ProductInfo'
import images from '../../constants/images'
import { Button } from '../index'

const ProductInfo = () => {
  return (
    <div className='product-info__container'>
        <div className='product__container'>
            <div className='product__image-wrapper'>
                <img src={images.headphonesZX9} alt='product' />
            </div>
            <div className='product__details'>
                {/* {newProduct && <h4>NEW PRODUCT</h4>} */}
                <h2>ZX9
                SPEAKER</h2>
                <p>
                    Upgrade your sound system with the all new ZX9 active speaker.
                    It’s a bookshelf speaker system that offers truly wireless
                    connectivity -- creating new possibilities for more
                    pleasing and practical audio setups.
                </p>
                <h4>$ 4500</h4>
                <div>
                    <Button text="add to cart" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductInfo
