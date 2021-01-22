import React from 'react'
import { Box, Button, Link, Typography } from '@material-ui/core'
import LOGO from '../../images/logo2.png'
import './style.scss'

export const Header = () => {
  const preventDefault = event => event.preventDefault()

  return (
    <Box className="header">
      <Link href="#" onClick={preventDefault}>
        <img className="header__logo" src={LOGO} alt="logo" />
      </Link>

      <Box className="header__options">
        <Box className="dropdown">
          <Link href="#" onClick={preventDefault}>
            <Typography className="dropdown__text">Serviços</Typography>
          </Link>

          <Box className="dropdown-content">
            <Typography>
              <Link href="#" onClick={preventDefault}>
                Cozinhas
              </Link>
            </Typography>

            <Typography>
              <Link href="#" onClick={preventDefault}>
                Hoteis
              </Link>
            </Typography>

            <Typography>
              <Link href="#" onClick={preventDefault}>
                Quartos
              </Link>
            </Typography>
          </Box>
        </Box>

        <Typography>
          <Link className="contact" href="#" onClick={preventDefault}>
            Contactos
          </Link>
        </Typography>
      </Box>

      <Box className="header__button">
        <Button variant="contained">Pedir Orçamento</Button>
      </Box>
    </Box>
  )
}
