import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './style.scss'

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
}

const ElevatedAppBar = ({ setDrawer, ...props }) => (
  <React.Fragment>
    <CssBaseline />

    <ElevationScroll {...props}>
      <AppBar className='app-bar__container'>
        <Toolbar>
          <IconButton
            aria-label='menu'
            color='inherit'
            edge='start'
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography className='app-bar__title' onClick={() => navigate('/')}>
            Bem Feito Remodelaçōes
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>

    <Toolbar id='back-to-top-anchor' />
  </React.Fragment>
)

ElevatedAppBar.propTypes = {
  setDrawer: PropTypes.func.isRequired
}

export default ElevatedAppBar
