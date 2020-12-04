import React from 'react'
import { Link } from 'gatsby-theme-material-ui'
import Layout from '../components/Layout'
import LOGO from '../images/logo.jpg'
import './style.scss'

const IndexPage = () => (
  <Layout>
    <img className='home__image' src={LOGO} alt='logo' />
  </Layout>
)

export default IndexPage
