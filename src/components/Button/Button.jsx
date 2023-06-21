import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

const Button = ({ text }) => {
  const location = useLocation()

  return (
    <Link to={`${location.pathname}/item`}>
      <button>{text}</button>
    </Link>
  )
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button
