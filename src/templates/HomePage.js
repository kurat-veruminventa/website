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
    subtitle,
    featuredImage,
    video,
    videoPoster,
    videoTitle,
    body
}) => (


  <main className="Home">
    <PageHeader
      large
      fronttitle={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
    <CookieConsent location="bottom" containerClasses="" buttonText="Continue" cookieName="CookieConsent" style={{ background: "white", boxShadow: "-10px -10px 10px rgba(0, 0, 0, .1)", color:"black", className:"container"}} buttonStyle={{ color: "white", backgroundColor: "black", fontSize: "18px", flex: "left", marginRight: "150px"}} declineButtonStyle={{ backgroundColor: "grey"}} contentStyle={{flex: "1 0 50%" }} contentClasses="cookie links" buttonClasses="cookie-button" expires={150} >
        <div className="container">
        We use cookies to improve user experience and analyze website traffic. By continuing to the site, you consent to store all the technologies described in our <a href="/cookie-policy">Cookie Policy.</a>{" "}
        </div>
    </CookieConsent>

    <PostCard />
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
        subtitle
        featuredImage
        video
        videoPoster
        videoTitle
      }
    }
  }
`
