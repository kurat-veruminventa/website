import React from 'react'
import { Link, graphql } from 'gatsby'

import PageHeader from '../components/PageHeader-small'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import AccordionEducation from '../components/Accordion-education'
import BackgroundVideo from '../components/BackgroundVideo'
import Popup from '../components/Popup'


import { ChevronLeft } from 'react-feather'
import './SinglePost.css'
import Image from '../components/Image'


// Export Template for use in CMS preview
export const TeamMemberPageTemplate = ({
    title,
    subtitle,
    featuredImage,
    body,
    role,
    email,
    portrait,
    linkedin,
    education,
    skills
}) => (

  <main className="Investor">

    <section className="section">
      <div className="container">
      <Link className="SinglePost--BackButton" to="/about/#team">
        <ChevronLeft /> BACK
      </Link>
      </div>
    </section>

    <div class="row container">
        <div class="column">
        <Image src={featuredImage} alt="" className={'container team-image'} />
        </div>
        <div class="column">
        {role && (
          <h6 className="team-padding" itemProp="role">
            {role}
          </h6>
        )}
        {title && (
          <h1 className="SinglePost--Title" itemProp="title">
            {title}
          </h1>
        )}
        <Content source={body} className={'team-padding'}/>
        <div class="symbol">
            <a href={email}>
            <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email" className={'container symbol'} style={{width: 1}}/>
            </a>
            <a href={linkedin}>
            <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn" className={'container symbol'}/>
            </a>
        </div>
        </div>
    </div>

    <div class="row section space-100b">
        <div class="container">
            <div class="column">
            <h6>Formal expertise</h6>
            <h2>Education</h2>
            <AccordionEducation items={education} />
            </div>
            <div class="column">
            <h6>Field of Expertise</h6>
            <h2>Technologies / Skills</h2>
            <Accordion items={skills} />
            </div>
        </div>
    </div>


  </main>
)

// Export Default HomePage for front-end
const TeamMemberPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <TeamMemberPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default TeamMemberPage




export const pageQuery = graphql`
  ## Query for TeamMemberPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query TeamMemberPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        subtitle
        role
        email
        featuredImage
        portrait
        linkedin
        education {
            study
            mainprofile
        },
        skills {
            title
            description
        }
      }
    }
  }
`
