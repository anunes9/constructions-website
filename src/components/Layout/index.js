import React from 'react'
import PropTypes from 'prop-types'
import { Container, CssBaseline } from '@material-ui/core'
import ElevatedAppBar from './AppBar'
import BackToTop from './BackToTop'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />

      <ElevatedAppBar />

      <Container>
        {children}
      </Container>

      <Footer />

      <BackToTop />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
