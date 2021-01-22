import React, { useEffect, useState } from 'react'
import { Box, Button, Link } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { TextLink } from '../TextLink'
import LOGO from '../../images/logo_cores.png'
import './style.scss'


export const Header = () => {
  const preventDefault = event => event.preventDefault()
  const [headerClass, setHeaderClass] = useState('header')
  const [textClass, setTextClass] = useState('')

  let width
  if (typeof window !== 'undefined') width = window.innerWidth

  const [mobile, setMobile] = useState(width < 481)

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY > 480
      setHeaderClass(scroll ? 'header header__solid' : 'header')
      setTextClass(scroll ? 'header__text' : '')
    }

    const handleWidth = () => {
      if (typeof window !== 'undefined') width = window.innerWidth
      setMobile(width < 481)
    }

    document.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleWidth)

    return () => {
      document.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleWidth)
    }
  }, [])

  if (mobile) {
    return (
      <Box className="header header__solid">
        <Link href="#" onClick={preventDefault}>
          <img className="header__logo" src={LOGO} alt="logo" />
        </Link>

        <Box className="header__options">
          <Box className="dropdown">
            <Box className="header__menu">
              <IconButton>
                <MenuIcon />
              </IconButton>

              <TextLink className="dropdown__text header__text">Menu</TextLink>
            </Box>

            <Box className="dropdown-content">
              <TextLink>Serviços</TextLink>
              <TextLink>Pedir Orçamento</TextLink>
              <TextLink>Contactos</TextLink>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Box className={headerClass}>
      <Link href="#" onClick={preventDefault}>
        <img className="header__logo" src={LOGO} alt="logo" />
      </Link>

      <Box className="header__options">
        <Box className="dropdown">
          <TextLink className={`dropdown__text ${textClass}`}>
            Serviços
          </TextLink>

          <Box className="dropdown-content">
            <TextLink>Cozinhas</TextLink>
            <TextLink>Hoteis</TextLink>
            <TextLink>Quartos</TextLink>
          </Box>
        </Box>

        <TextLink className={`dropdown__text ${textClass}`}>Contactos</TextLink>
      </Box>

      <Box>
        <Button variant="contained">Pedir Orçamento</Button>
      </Box>
    </Box>
  )
}
