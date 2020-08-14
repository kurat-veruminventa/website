import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader-small'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import GoogleMap from '../components/GoogleMap'
import Layout from '../components/Layout'
import './ContactPage.css'
import Image from '../components/Image'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  address,
  secondaddress,
  phone,
  email,
  locations
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="row section">
      <div className="container">
        <div className="column links">
          <Content source={body} />
        </div>
        <div className="column">
            <p>
            Are you coming by for a visit or sending us something? You can find our addresses below.
            </p>
            <div className="Contact--Details">
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address}
              </a>
            )}
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  secondaddress
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {secondaddress}
              </a>
            )}
            </div>
        </div>
      </div>
    </section>
    <section className="row section">
        <div className="container">
            <h2>We'd love to hear from you</h2>
          <div class="column3">
            <h6>Co-Founder & Co-CEO</h6>
            <h2>Magnus Arveng</h2>
            <p>The man with the idea and energy to engage anyone at any time. Get in touch for important partnership inquires or speaker requests.</p>
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
          <h6>Co-Founder & Co-CEO</h6>
          <h2>Moina Tamuly</h2>
          <p>With a vision and mind to lead a generation through a paradigm shift, Moina would love to discuss visionary ideas and inspire you.</p>
            <div class="symbol">
                <a href="mailto:moina@ntention.com">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email" />
                </a>
                <a href="https://www.linkedin.com/in/moina-yon-medb%C3%B8e-tamuly-a4967ab2/">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn" />
                </a>
            </div>
        </div>
        <div class="column3">
          <h6>Technology</h6>
          <h2>Haakon Pettersen</h2>
          <p>Questions about compatibility of our products or specifications concerning our technology and use cases? Get in touch with our CTO.</p>
            <div class="symbol">
                <a href="mailto:hfp@ntention.com">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email" />
                </a>
                <a href="https://www.linkedin.com/in/haakon-fuhre-pettersen/">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn" />
                </a>
            </div>
        </div>
        <div class="column3 space-20t">
          <h6>Financials & Investor Relations</h6>
          <h2>Fredrik S. Ahlborg</h2>
          <p>Requests or negotiation offers concerning financial discussions or investment strategies? Get in touch with our CFO.</p>
            <div class="symbol">
                <a href="mailto:fredrik.sha@ntention.com">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email" />
                </a>
                <a href="https://www.linkedin.com/in/fredrik-shaughnessy-ahlborg-604819126/">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn" />
                </a>
            </div>
        </div>
        <div class="column3 space-20t">
          <h6>Marketing & Media</h6>
          <h2>Vegard J. Løwe</h2>
          <p>Contact our CMO for general media inquires or brand related requests concerning the Ntention’s public relations.</p>
            <div class="symbol">
                <a href="mailto:vegardjl@ntention.com">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email" />
                </a>
                <a href="https://www.linkedin.com/in/vegard-lowe/">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn" />
                </a>
            </div>
        </div>
        <div class="column3 space-20t">
          <h6>Strategy & Research</h6>
          <h2>Frank Øygard</h2>
          <p>To innovate and lead the society through a paradigm shift it requires state-of-the-art research and insight. Frank is your guy.</p>
            <div class="symbol">
                <a href="mailto:frank@ntention.com">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email" />
                </a>
                <a href="https://www.linkedin.com/in/frank-alexander-%C3%B8ygard-11301a138/">
                <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn" />
                </a>
            </div>
        </div>

        </div>
    </section>
    <section className="row section space-100b space-100t">
    <div class="container">
    <div class="column">
        <div class="container hover-image">
        <h6>Headquarters</h6>
        <h2>Most innovative <br></br> student ecosystem.</h2>
        <p>
        Ntention’s offices are located in the heart of the innovative entreprenuerial ecosystem in Trondheim, Norway. The Norwegian University of Technology and Science (NTNU) is Norway’s top technology university with a wide range of state-of-the-art studies. The Gründerbrakka at NTNU and NTNU’s School of Entrepreneurship houses Ntention’s two offices.
        </p>
        </div>
    </div>
    <div class="column">
        <div class="container">
          <Image src="/images/contact/Team-working.jpg" alt="Team working at Gründerbrakka" className={'container'}/>
        </div>
    </div>
    </div>
    </section>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        secondaddress
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`
