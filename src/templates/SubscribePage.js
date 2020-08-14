import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader-small'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'
import Image from '../components/Image'
import Form from '../components/FormControlled'

// Export Template for use in CMS preview
export const SubscribePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => (
  <main className="Investor">

    <section className="row section links space-100b space-100t">
      <div className="container">
        <Content source={body}/>
        <div class="container">
            <div class="column">
            <p>
                We love to inform our friends with news about our progress; that’s why we send out an email newsletter every other month with our highlights from last months. As a subscriber to our newsletter, you’ll get access to exclusive insight into our progress, research, and future development.
            </p>
                <Form />
            </div>
            <div class="column">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/8e14be64-2f04-49ad-8027-b5d31eb3b3e6.Jpeg" alt="research-based" className={'container'}/>
            </div>
        </div>
      </div>
    </section>


    </main>
)

const SubscribePage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <SubscribePageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default SubscribePage

export const pageQuery = graphql`
  query SubscribePage($id: String!) {
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
