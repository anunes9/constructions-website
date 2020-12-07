import React from 'react'
import { navigate } from 'gatsby'
import { Button } from '@material-ui/core'
import Layout from '../components/Layout'
import LOGO from '../images/logo.jpg'
import './style.scss'

const IndexPage = () => (
  <Layout>
    <img className='home__image' src={LOGO} alt='logo' />

    <Button
      color='primary'
      onClick={() => navigate('/orcamento')}
      variant='outlined'
    >
      Peça já o seu orçamento
    </Button>
  </Layout>
)

export default IndexPage
