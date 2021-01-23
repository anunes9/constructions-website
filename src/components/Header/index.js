import React from 'react'
import { Box, Button, Link } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { navigate } from 'gatsby'
import { TextLink } from '../Text'
import LOGO from '../../images/logo_cores.png'
import './style.scss'

export class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      headerClass: 'header',
      textClass: '',
      mobile: false,
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined')
      this.setState({ mobile: window.innerWidth < 481 })

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
      textClass: scroll ? 'header__text' : '',
    })
  }

  handleWidth = () => {
    if (typeof window !== 'undefined')
      this.setState({ mobile: window.innerWidth < 481 })
  }

  render() {
    const { mobile, headerClass, textClass } = this.state

    if (mobile) {
      return (
        <Box className="header header__solid">
          <Box className="header__options">
            <Box className="dropdown">
              <Box className="header__menu">
                <IconButton>
                  <MenuIcon />
                </IconButton>

                <TextLink className="dropdown__text header__text">
                  Menu
                </TextLink>
              </Box>

              <Box className="dropdown-content">
                <TextLink onClick={() => navigate('/servicos')}>
                  Serviços
                </TextLink>

                <TextLink onClick={() => navigate('/orcamentos')}>
                  Pedir Orçamento
                </TextLink>

                <TextLink onClick={() => navigate('/contactos')}>
                  Contactos
                </TextLink>
              </Box>
            </Box>
          </Box>

          <Link href="#" onClick={() => navigate('/')}>
            <img className="header__logo" src={LOGO} alt="logo" />
          </Link>
        </Box>
      )
    }

    return (
      <Box className={headerClass}>
        <Link href="#" onClick={() => navigate('/')}>
          <img className="header__logo" src={LOGO} alt="logo" />
        </Link>

        <Box className="header__options">
          <Box className="dropdown">
            <TextLink
              className={`dropdown__text ${textClass}`}
              onClick={() => navigate('/servicos')}
            >
              Serviços
            </TextLink>

            <Box className="dropdown-content">
              <TextLink onClick={() => navigate('/servicos')}>
                Remodelação
              </TextLink>

              <TextLink onClick={() => navigate('/servicos')}>
                Manutenção
              </TextLink>

              <TextLink onClick={() => navigate('/servicos')}>Áreas</TextLink>
            </Box>
          </Box>

          <TextLink
            className={`dropdown__text ${textClass}`}
            onClick={() => navigate('/contactos')}
          >
            Contactos
          </TextLink>
        </Box>

        <Box>
          <Button
            className="header__button"
            onClick={() => navigate('/orcamentos')}
            variant="contained"
          >
            Pedir Orçamento
          </Button>
        </Box>
      </Box>
    )
  }
}
