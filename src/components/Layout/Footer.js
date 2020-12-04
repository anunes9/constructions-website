import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import './style.scss'

const Footer = () => (
  <Box className='footer__container'>
    <Container>
      <Typography className='footer__title'>Contactos</Typography>

      <Typography className='footer__text'>
        <Typography className='footer__label' component='span'>
          Telefone
        </Typography> 213456789
      </Typography>

      <Typography className='footer__text'>
        <Typography className='footer__label' component='span'>
          Telemóvel
        </Typography> 913456789
      </Typography>

      <Typography className='footer__text'>
        <Typography className='footer__label' component='span'>
          Email
        </Typography> email@email.com
      </Typography>

      <Typography className='footer__footnote'>
        2020 @ Todos os direitos reservados - andrenunes
      </Typography>
    </Container>
  </Box>
)

export default Footer
