import React from 'react'
import './Recommended.scss'
import { Button } from '../index'
// import images from '../../constants'

const Recommended = () => {
  return (
    <div className='recommended__container'>
        <div className='recommended__image'>
            <img src='' alt='recommended-img' />
        </div>
        <div className='recommended__details'>
            <h2>XX99 MARK I</h2>
            <Button text='see product' />
        </div>
    </div>
  )
}

export default Recommended
