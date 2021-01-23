import React from 'react'
import PropTypes from 'prop-types'
import { Link, Typography } from '@material-ui/core'
import './style.scss'

export const Title = ({ children, className }) => (
  <Typography className={`title ${className}`}>{children}</Typography>
)

Title.defaultProps = {
  className: ''
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

export const Text = ({ children, className }) => (
  <Typography className={`text ${className}`}>{children}</Typography>
)

Text.defaultProps = {
  className: ''
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

export const TextLink = ({ children, href, onClick, ...props }) => (
  <Link className="text_link" href={href} onClick={onClick}>
    <Typography {...props}>{children}</Typography>
  </Link>
)

TextLink.defaultProps = {
  href: '#',
  onClick: () => { }
}

TextLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
}


