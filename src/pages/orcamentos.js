import React from 'react'
import { Container } from '@material-ui/core'
import { Layout } from '../components/Layout'
import { TopImages } from '../components/TopImages'
import { Text, Title } from '../components/Text'
import './style.scss'

const Orcamentos = () => (
  <Layout>
    <TopImages />

    <Container className="contact">
      <Title>Orçamentos</Title>

      <Text>
        Use o nosso formulário de contacto para obter um Orçamento para o seu
        serviço. Descreva ao promenor o tipo de serviço e detalhes que ache
        importantes. Depois de recebido o pedido entraremos em contacto num
        prazo máximo de 48 horas.
      </Text>
    </Container>
  </Layout>
)

export default Orcamentos
