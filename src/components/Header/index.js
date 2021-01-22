import React, { useEffect, useState } from 'react'
import { Box, Button, Link } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { TextLink } from '../TextLink'
import LOGO from '../../images/logo_cores.png'
import './style.scss'

export class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      headerClass: 'header',
      textClass: '',
      mobile: false
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') this.setState({ mobile: window.innerWidth < 481 })

    document.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleWidth)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleWidth)
  }

  handleScroll = () => {
    const scroll = window.scrollY > 480
    this.setState({
      headerClass: scroll ? 'header header__solid' : 'header',
      textClass: scroll ? 'header__text' : ''
    })
  }

  handleWidth = () => {
    if (typeof window !== 'undefined') this.setState({ mobile: window.innerWidth < 481 })
  }

  render() {
    const { mobile, headerClass, textClass } = this.state

    if (mobile) {
      return (
        <Box className="header header__solid">
          <Link href="#" onClick={this.preventDefault}>
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
        <Link href="#" onClick={this.preventDefault}>
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
}
