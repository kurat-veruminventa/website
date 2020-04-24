import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader-small'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Popup from '../components/Popup'
import Slideshow from '../components/Slider.js'

import Image from '../components/Image'


// Export Template for use in CMS preview
export const VirtualRealityPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Investor">


    <section className="">
      <div className="container">
        <Content source={body} />
      </div>
    </section>




  </main>
)

// Export Default HomePage for front-end
const VirtualRealityPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <VirtualRealityPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default VirtualRealityPage




export const pageQuery = graphql`
  ## Query for VirtualRealityPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query VirtualRealityPage($id: String!) {
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
