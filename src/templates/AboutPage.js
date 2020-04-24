import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader-small'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Popup from '../components/Popup'
import ProfileTabs from '../components/ProfileTabs.js'
import Tabs from '../components/Tabs.js'

import Image from '../components/Image'


// Export Template for use in CMS preview
export const AboutPageTemplate = ({ title, subtitle, featuredImage, body }) => (
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
    <section className="section">
    <div class="row">
    <div className="container" id="team">
        <Tabs/>
    </div>
    </div>
    </section>

  </main>
)

// Export Default HomePage for front-end
const AboutPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutPage




export const pageQuery = graphql`
  ## Query for AboutPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query AboutPage($id: String!) {
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
