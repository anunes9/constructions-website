import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import './style.scss'

const Areas = () => (
  <Layout>
    <Box className={'manutencao__body'}>
      <Typography className={'manutencao__title'} variant={'h3'}>
        Áreas
      </Typography>

      <Box className={'manutencao__list'}>
        <Typography className={'manutencao__list-item'}>
          - AVAC
        </Typography>

        <Typography className={'manutencao__list-item'}>
          - Canalização
        </Typography>
        
        <Typography className={'manutencao__list-item'}>
          - Carpintaria
        </Typography>

        <Typography className={'manutencao__list-item'}>
          - Canalização
        </Typography>
        
        <Typography className={'manutencao__list-item'}>
          - Eletricidade
        </Typography>
        
        <Typography className={'manutencao__list-item'}>
          - Pavimentos
        </Typography>

        <Typography className={'manutencao__list-item'}>
          - Pintura
        </Typography>

        <Typography className={'manutencao__list-item'}>
          - Pladur
        </Typography>

        <Typography className={'manutencao__list-item'}>
          - Serralharia
        </Typography>
      </Box>
    </Box>
  </Layout>
)

export default Areas
