import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline } from '@material-ui/core'
import { BackToTop } from '../BackToTop'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = ({ children }) => (
  <React.Fragment>
    <CssBaseline />

    <Header />

    <React.Fragment>
      {children}
    </React.Fragment>

    <Footer />

    <BackToTop />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.object
  ])
}
