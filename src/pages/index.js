import React from 'react'
import { TopImages } from '../components/TopImages'
import { Content } from '../components/Content'
import { Layout } from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <React.Fragment>
      <TopImages />

      <Content />
    </React.Fragment>
  </Layout>
)

export default IndexPage
