import React from 'react'
import { Typography } from '@material-ui/core'
import { Layout } from '../components/Layout'
import { TopImages } from '../components/TopImages'
import './style.scss'

const NotFoundPage = () => (
  <Layout>
    <TopImages />

    <Typography className="not_found_text">Página não encontrada</Typography>
  </Layout>
)

export default NotFoundPage
