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
        <ListItem button key={'Inicio'} onClick={() => navigate('/')}>
          <ListItemText primary={'Início'} />
        </ListItem>

        <Divider />

        <ListItem
          button
          key={'Serviços'}
          onClick={() => navigate('/servicos')}
        >
          <ListItemText primary={'Reabilitação / Remodelação'} />
        </ListItem>

        <Divider />

        <ListItem
          button
          key={'Manutenção'}
          onClick={() => navigate('/manutencao')}
        >
          <ListItemText primary={'Manutenção'} />
        </ListItem>

        <Divider />

        <ListItem
          button
          key={'Areas'}
          onClick={() => navigate('/areas')}
        >
          <ListItemText primary={'Áreas'} />
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
          key={'Contactos'}
          onClick={() => navigate('/contactos')}
        >
          <ListItemText primary={'Contactos'} />
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
