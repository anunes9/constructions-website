import React from 'react'
import PropTypes from 'prop-types'
import { Link, Typography } from '@material-ui/core'
import './style.scss'

// eslint-disable-next-line no-unused-vars
export const TextLink = ({ children, href, onClick, ...props }) => {
  const preventDefault = event => event.preventDefault()

  return (
    <Link className="text_link" href={href} onClick={preventDefault}>
      <Typography {...props}>{children}</Typography>
    </Link>
  )
}

TextLink.defaultProps = {
  href: '#',
  onClick: () => { }
}

TextLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
}
