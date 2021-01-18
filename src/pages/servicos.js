import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import './style.scss'

const Servicos = () => (
  <Layout>
    <Box className={'manutencao__body'}>
      <Typography className={'manutencao__title'} variant={'h3'}>
        Reabilitação / Remodelação
      </Typography>

      <Box className={'manutencao__list'}>
        <Typography className={'manutencao__list-item'}>
          - Armazéns
        </Typography>
        
        <Typography className={'manutencao__list-item'}>
          - Casas de Banho
        </Typography>

        <Typography className={'manutencao__list-item'}>
          - Cozinhas
        </Typography>
        
        <Typography className={'manutencao__list-item'}>
          - Edifícios
        </Typography>

        <Box className={'manutencao__sub-list'}>
          <Typography className={'manutencao__list-item'}>
            - Impermeabilização de coberturas, telhados, terraços, varandas
          </Typography>

          <Typography className={'manutencao__list-item'}>
          - Pintura de Fachadas
          </Typography>
        </Box>
        
        <Typography className={'manutencao__list-item'}>
          - Escritórios
        </Typography>

        <Typography className={'manutencao__list-item'}>
          - Lojas
        </Typography>
      </Box>
    </Box>
  </Layout>
)

export default Servicos
