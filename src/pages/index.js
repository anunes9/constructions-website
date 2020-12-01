import React from 'react'
import { Link } from 'gatsby-theme-material-ui'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <Link to="/page-2/">Go to page 2</Link> <br />

    {[...new Array(12)]
      .map(
        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
      )
      .join('\n')}
  </Layout>
)

export default IndexPage
