import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import './style.scss'

const Manutencao = () => (
  <Layout>
    <Box className={'manutencao__body'}>
      <Typography className={'manutencao__title'} variant={'h3'}>
        Manutenção
      </Typography>

      <Box className={'manutencao__list'}>
        <Typography className={'manutencao__list-item'}>
          - Condomínios
        </Typography>
        
        <Typography className={'manutencao__list-item'}>
          - Edifícios
        </Typography>

        <Typography className={'manutencao__list-item'}>
          - Empresas
        </Typography>
        
        <Typography className={'manutencao__list-item'}>
          - Hotéis
        </Typography>
        
        <Typography className={'manutencao__list-item'}>
          - Moradias
        </Typography>

        <Typography className={'manutencao__list-item'}>
          - Piscinas
        </Typography>
      </Box>
    </Box>
  </Layout>
)

export default Manutencao
