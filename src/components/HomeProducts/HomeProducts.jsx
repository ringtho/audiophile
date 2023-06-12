import React from 'react'
import './HomeProducts.scss'
import { Button } from '../index'

const HomeProducts = () => {
  return (
    <div className='products__container'>
        <div className='products__wrapper'>
            <div className='products__details'>
                <h2 className='products__title'>ZX9 SPEAKER</h2>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Button text='see product' />
            </div>
        </div>
    </div>
  )
}

export default HomeProducts
