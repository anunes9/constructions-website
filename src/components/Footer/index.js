import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import './style.scss'
import { TextLink } from '../TextLink'

export const Footer = () => (
  <Box className="footer__container">
    <Container>
      <Box className="footer__text-container">
        <Box className="footer__inside-container">
          <Typography className="footer__title">
            Reabilitação e Remodelação
          </Typography>

          <TextLink className="footer__text">Edifícios</TextLink>

          <TextLink className="footer__text">Edifícios</TextLink>

          <TextLink className="footer__text">Cozinhas</TextLink>

          <TextLink className="footer__text">Casas de Banho</TextLink>

          <TextLink className="footer__text">Lojas</TextLink>

          <TextLink className="footer__text">Escritórios</TextLink>

          <TextLink className="footer__text">Armazéns</TextLink>
        </Box>

        <Box className="footer__inside-container">
          <TextLink className="footer__title">Manutenção</TextLink>

          <TextLink className="footer__text">Condomínios</TextLink>

          <TextLink className="footer__text">Empresas</TextLink>

          <TextLink className="footer__text">Edifícios</TextLink>

          <TextLink className="footer__text">Moradias</TextLink>

          <TextLink className="footer__text">Piscinas</TextLink>

          <TextLink className="footer__text">Hotéis</TextLink>
        </Box>

        <Box className="footer__inside-container">
          <TextLink className="footer__title">Áreas</TextLink>

          <TextLink className="footer__text">Eletricidade</TextLink>

          <TextLink className="footer__text">Canalização</TextLink>

          <TextLink className="footer__text">AVAC</TextLink>

          <TextLink className="footer__text">Pintura</TextLink>

          <TextLink className="footer__text">Pladur</TextLink>

          <TextLink className="footer__text">Pavimentos</TextLink>

          <TextLink className="footer__text">
            Carpintaria / Serralharia
          </TextLink>
        </Box>

        <Box className="footer__inside-container">
          <TextLink className="footer__title">
            Bem Feito Remodelações
          </TextLink>

          <TextLink className="footer__text">Sobre nós</TextLink>

          <TextLink className="footer__text">Orçamentos</TextLink>

          <TextLink className="footer__text">Contactos</TextLink>
        </Box>
      </Box>

      <Typography className="footer__footnote">
        2021 @ Todos os direitos reservados - andrenunes
      </Typography>
    </Container>
  </Box>
)
