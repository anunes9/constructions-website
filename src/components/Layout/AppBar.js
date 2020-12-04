import React from 'react'
import PropTypes from 'prop-types'
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

const ElevatedAppBar = (props) => (
  <React.Fragment>
    <CssBaseline />

    <ElevationScroll {...props}>
      <AppBar className='app-bar__container'>
        <Toolbar>
          <IconButton
            edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography className='app-bar__title'>
            Luís Rodrigues Construções
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>

    <Toolbar id="back-to-top-anchor" />
  </React.Fragment>
)

export default ElevatedAppBar
