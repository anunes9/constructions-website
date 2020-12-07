import React from 'react'
import PropTypes from 'prop-types'
import { Container, CssBaseline } from '@material-ui/core'
import ElevatedAppBar from './AppBar'
import BackToTop from './BackToTop'
import Footer from './Footer'
import Menu from './Menu'

const Layout = ({ children }) => {
  const [drawerState, setDrawer] = React.useState(false)

  return (
    <React.Fragment>
      <CssBaseline />

      <ElevatedAppBar setDrawer={setDrawer} />

      <Menu drawerState={drawerState} setDrawer={setDrawer} />

      <Container className='body__container'>
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
