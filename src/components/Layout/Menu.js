import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { navigate } from 'gatsby'
import './style.scss'

const Menu = ({ drawerState, setDrawer }) => (
  <Drawer anchor={'top'} open={drawerState} onClose={() => setDrawer(false)}>
    <Box
      className='menu__container'
      role="presentation"
      onClick={() => setDrawer(false)}
      onKeyDown={() => setDrawer(false)}
    >
      <List>
        <ListItem
          button
          key={'Inicio'}
          onClick={() => navigate('/')}
        >
          <ListItemText primary={'Início'} />
        </ListItem>

        <Divider />

        <ListItem
          button
          key={'Orcamento'}
          onClick={() => navigate('/orcamento')}
        >
          <ListItemText primary={'Pedir orçamento'} />
        </ListItem>

        <Divider />

        <ListItem
          button
          key={'Galeria'}
          onClick={() => navigate('/galeria')}
        >
          <ListItemText primary={'Galeria'} />
        </ListItem>

        <Divider />

        <ListItem
          button
          key={'Contactos'}
          onClick={() => navigate('/contactos')}
        >
          <ListItemText primary={'Contactos'} />
        </ListItem>

        <Divider />

        <ListItem key={'Serviços'}>
          <ListItemText primary={'Serviços'} />
        </ListItem>

        <Divider />

        <ListItem
          button
          key={'Cozinhas'}
          onClick={() => navigate('/cozinhas')}
        >
          <ArrowRightIcon />

          <ListItemText primary={'Cozinhas'} />
        </ListItem>

        <ListItem
          button
          key={'Quartos'}
          onClick={() => navigate('/quartos')}
        >
          <ArrowRightIcon />

          <ListItemText primary={'Quartos'} />
        </ListItem>

        <ListItem
          button
          key={'Casas de banho'}
          onClick={() => navigate('/wc')}
        >
          <ArrowRightIcon />

          <ListItemText primary={'Casas de banho'} />
        </ListItem>
      </List>
    </Box>
  </Drawer>
)

Menu.propTypes = {
  drawerState: PropTypes.bool.isRequired,
  setDrawer: PropTypes.func.isRequired
}

export default Menu
