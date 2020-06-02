import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader-small'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Popup from '../components/Popup'
import InstagramFeed from '../components/InstagramFeed'

import Image from '../components/Image'
import Tabs from '../components/Tabs-career.js'


// Export Template for use in CMS preview
export const CareerPageTemplate = ({ title, subtitle, featuredImage, body }) => (
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

    <section className="section space-100b">
        <div className="container">
            <h2>Find open roles</h2>
            <Tabs/>
        </div>
    </section>



    <div className="taCenter container skinnier">
        <h2>Get an exclusive insight into our everyday worklife, <a href="https://www.instagram.com/ntention.as/">@ntention_as</a></h2>
    </div>
        <InstagramFeed count="8" />
  </main>
)

// Export Default HomePage for front-end
const CareerPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <CareerPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default CareerPage




export const pageQuery = graphql`
  ## Query for CareerPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query CareerPage($id: String!) {
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
