import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { Layout } from '../components/Layout'
import { TopImages } from '../components/TopImages'
import { Text, Title } from '../components/Text'
import './style.scss'

const Contactos = () => (
  <Layout>
    <TopImages />

    <Container className="contact">
      <Title>Contactos</Title>

      <Text>
        Use o nosso formulário de contacto ou contacte-nos através do email{' '}
        <Typography
          href="mailto:webmaster@example.com"
          className="contact__email"
          component="a"
        >
          bemfeito.remodelacoes@gmail.com
        </Typography>
        .
      </Text>
    </Container>
  </Layout>
)

export default Contactos
