import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { navigate } from 'gatsby'
import { TextLink } from '../Text'
import './style.scss'

const Remodelacao = [
  'Armazéns',
  'Casas de Banho',
  'Cozinhas',
  'Edifícios',
  'Escritórios',
  'Lojas'
]

const Manutencao = [
  'Condomínios',
  'Edifícios',
  'Empresas',
  'Hotéis',
  'Moradias',
  'Piscinas'
]

const Areas = [
  'AVAC',
  'Canalização',
  'Carpintaria / Serralharia',
  'Eletricidade',
  'Pavimentos',
  'Pintura / Pladur'
]

export const Footer = () => (
  <Box className="footer__container">
    <Container>
      <Box className="footer__text-container">
        <Box className="footer__inside-container">
          <TextLink
            className="footer__title"
            onClick={() => navigate('/servicos')}
          >
            Reabilitação e Remodelação
          </TextLink>

          {Remodelacao.map((text, i) => (
            <TextLink
              key={i}
              className="footer__text"
              onClick={() => navigate('/servicos')}
            >
              {text}
            </TextLink>  
          ))}
        </Box>

        <Box className="footer__inside-container">
          <TextLink
            className="footer__title"
            onClick={() => navigate('/servicos')}
          >
            Manutenção
          </TextLink>

          {Manutencao.map((text, i) => (
            <TextLink
              key={i}
              className="footer__text"
              onClick={() => navigate('/servicos')}
            >
              {text}
            </TextLink>  
          ))}
        </Box>

        <Box className="footer__inside-container">
          <TextLink
            className="footer__title"
            onClick={() => navigate('/servicos')}
          >
            Áreas
          </TextLink>

          {Areas.map((text, i) => (
            <TextLink
              key={i}
              className="footer__text"
              onClick={() => navigate('/servicos')}
            >
              {text}
            </TextLink>  
          ))}
        </Box>

        <Box className="footer__inside-container">
          <TextLink
            className="footer__title"
            onClick={() => navigate('/contactos')}
          >
            Bem Feito Remodelações
          </TextLink>

          <TextLink
            className="footer__text"
            onClick={() => navigate('/contactos')}
          >
            Contactos
          </TextLink>

          <TextLink
            className="footer__text"
            onClick={() => navigate('/orcamentos')}
          >
            Orçamentos
          </TextLink>

          <TextLink
            className="footer__text"
            onClick={() => navigate('/contactos')}
          >
            Sobre nós
          </TextLink>
        </Box>
      </Box>

      <Typography className="footer__footnote">
        2021 @ Todos os direitos reservados - andrenunes
      </Typography>
    </Container>
  </Box>
)
