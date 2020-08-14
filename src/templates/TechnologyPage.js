import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader-small'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Popup from '../components/Popup'

import Image from '../components/Image'


// Export Template for use in CMS preview
export const TechnologyPageTemplate = ({ title, subtitle, featuredImage, body }) => (
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


    <div class="container space-100t space-100b">
        <div class="row"><h2>For technical discussions</h2>
          <div class="column3">
          <h6>Co-founder & CTO</h6><h2>
        Haakon Pettersen</h2><p>Questions about compatibility of our products or specifications concerning our technology and use cases? Get in touch with our CTO.</p>
        <div class="symbol">
            <a href="mailto:hfp@ntention.com">
            <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/haakon-fuhre-pettersen/">
            <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn" />
            </a>
        </div>
        </div>
        </div>
    </div>

  </main>
)

// Export Default HomePage for front-end
const TechnologyPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <TechnologyPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default TechnologyPage




export const pageQuery = graphql`
  ## Query for TechnologyPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query TechnologyPage($id: String!) {
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
