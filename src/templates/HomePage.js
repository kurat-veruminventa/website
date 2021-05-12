import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import BackgroundVideo from '../components/BackgroundVideo'
import '../components/Footer.css'
import '../components/PostCard.css'
import Image from '../components/Image'


import PostCard from '../components/PostCard'

import CookieConsent, { Cookies } from "react-cookie-consent";



// Export Template for use in CMS preview
export const HomePageTemplate = ({
    title,
    featuredImage,
    body
}) => (


  <main className="Home">
    <PageHeader
      large
      fronttitle={title}
      backgroundImage={featuredImage}
    />

  </main>
)



// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage





export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        featuredImage
      }
    }
  }
`
