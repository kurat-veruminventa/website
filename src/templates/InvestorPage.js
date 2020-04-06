import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader-small'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const InvestorPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Investor">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>

  </main>
)

// Export Default HomePage for front-end
const InvestorPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <InvestorPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default InvestorPage




export const pageQuery = graphql`
  ## Query for InvestorPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query InvestorPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
