import React from 'react'
import './Header.scss'
import PropTypes from 'prop-types'

const Header = ({ page }) => {
  return (
    <div className='header__wrapper'>
      <h2>{page}</h2>
    </div>
  )
}

Header.propTypes = {
  page: PropTypes.string
}

export default Header
