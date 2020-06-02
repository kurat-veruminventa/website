import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader-small'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Popup from '../components/Popup'
import Tabs from '../components/Tabs-investor.js'

import Image from '../components/Image'


// Export Template for use in CMS preview
export const InvestorPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Investor">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section space-100t">
    <div className="container taCenter" id="team">
        <h2>Why Invest in Ntention</h2>
        <Tabs/>
    </div>
    </section>


    <div class="container space-100t full-mobile">
        <div class="full-width-press">
            <div class="full-center">
             <h6>Press & publications</h6><h2>Featured in</h2>
              <div class="column5 logo-hover">
                  <a href="https://www.forbes.com/sites/elizabethhowell1/2019/11/05/space-drones-could-fly-around-the-moon-via-smart-gloves/#2430ebdb4290">
                  <Image src="https://i.ibb.co/5Lt12b4/Forbes.png" alt="Forbes"/>
                  </a>
              </div>
              <div class="column5 logo-hover ">
                  <a href="https://www.inverse.com/article/60614-astronaut-smart-glove">
                  <Image src="https://i.ibb.co/0tcSJfN/Inverse-logo.png" alt="Inverse" />
                  </a>
              </div>
              <div class="column5 logo-hover ">
                  <a href="https://www.dailymail.co.uk/sciencetech/article-7648135/Smart-glove-lets-astronauts-control-drones-hand-gestures.html">
                  <Image src="https://i.ibb.co/fYL2jP1/Daily-mail.png" alt="Daily Mail"/>
                  </a>
              </div>
              <div class="column5 logo-hover ">
                  <a href="https://shifter.no/magnus-arveng-moina-tamuly-nasa/vurderte-a-legge-ned-tidligere-i-ar-na-samarbeider-ntention-med-nasa-partner/130351">
                  <Image src="https://i.ibb.co/bWSwFyF/Shifter-logo.png" alt="Shifter" />
                  </a>
              </div>
              <div class="column5 logo-hover hide-mobile">
                  <a href="https://interestingengineering.com/smart-gloves-will-help-astronauts-to-control-drones-robots-and-explore-space">
                  <Image src="https://i.ibb.co/5sdzMc2/Interesting-engineering.png" alt="Interesting Engineering" />
                  </a>
              </div>
            </div>
        </div>
    </div>

    <div class="container space-100t">
        <div class="row"><h2>Investor Relations Contact</h2>
          <div class="column3">
          <h6>Co-Founder & Co-CEO</h6><h2>
        Magnus Arveng</h2>The man with the idea and energy to engage anyone at any time. Get in touch for important partnership inquires or speaker requests.
        <div class="symbol">
            <a href="mailto:marveng@ntention.com">
            <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/magnusarveng/">
            <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn" />
            </a>
        </div>
        </div>
        <div class="column3">
        <h6>Chief Financial Officer</h6><h2>
      Fredrik S. Ahlborg</h2>Requests or negotiation offers concerning financial discussions or investment strategies? Get in touch with our CFO.
      <div class="symbol">
          <a href="mailto:fredrik.sha@ntention.com">
          <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/fredrik-shaughnessy-ahlborg-604819126/">
          <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn" />
          </a>
      </div>
        </div>
        </div>
    </div>


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
