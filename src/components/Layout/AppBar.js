import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@material-ui/core'

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
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Constructions Lda</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Toolbar id="back-to-top-anchor" />
  </React.Fragment>
)

export default ElevatedAppBar
