import React from 'react'
import { Container } from '@material-ui/core'
import { Layout } from '../components/Layout'
import { TopImages } from '../components/TopImages'
import { Text, Title } from '../components/Text'
import './style.scss'

const Servicos = () => (
  <Layout>
    <TopImages />

    <Container className="contact">
      <Title>Reabilitação e Remodelação</Title>

      <Text>
        Fazemos reabilitação e remodelação de todo o tipo de espaço, Edifícios,
        Cozinhas, Casas de Banho, Lojas, Escritórios e Armazéns.
      </Text>

      <Title>Manutenção</Title>

      <Text>
        Fazemos manutenção de Condomínios, Empresas, Edifícios, Moradias,
        Piscinas e Hotéis.
      </Text>

      <Title>Áreas</Title>

      <Text>
        Dispomos de vários tipos de serviços tais como AVAC, serviços de
        Canalização, Carpintaria e Serralharia, Eletricidade, Pavimentos,
        Pintura e trabalhos em Pladur.
      </Text>
    </Container>
  </Layout>
)

export default Servicos
