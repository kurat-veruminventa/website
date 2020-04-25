import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'


import Content from '../components/Content'
import Layout from '../components/Layout'
import './SinglePost.css'
import Image from '../components/Image'

export const SinglePostTemplate = ({
  title,
  date,
  author,
  authorlink,
  excerpt,
  portrait,
  featuredImage,
  role,
  email,
  linkedin,
  postType,
  body,
  nextPostURL,
  prevPostURL,
  categories = []
}) => (
  <main>
    <article
      className="SinglePost section light"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="container skinny">
        <Link className="SinglePost--BackButton" to={postType}>
          <ChevronLeft /> BACK
        </Link>
        <div className="SinglePost--Content relative">

          <div className="SinglePost--Meta">
            {date && (
              <time
                className="SinglePost--Meta--Date"
                itemProp="dateCreated pubdate datePublished"
                date={date}
              >
                {date}
              </time>
            )}
            {categories && (
              <Fragment>
                <span>|</span>
                {categories.map((cat, index) => (
                  <span
                    key={cat.category}
                    className="SinglePost--Meta--Category"
                  >
                    {cat.category}
                    {/* Add a comma on all but last category */}
                    {index !== categories.length - 1 ? ',' : ''}
                  </span>
                ))}
              </Fragment>
            )}
          </div>
          {title && (
            <h1 className="SinglePost--Title" itemProp="title">
              {title}
            </h1>
          )}
          <div className="SinglePost--Excerpt">
          <Content source={excerpt} />
          </div>

          <Image src={featuredImage} alt="" className={'featured-image container space-50b'} />
          <div className="SinglePost--InnerContent links">
            <Content source={body} />
          </div>
          <section className="section">
          <div class="column5-news">
          <h4>Ntention news</h4>
          </div>
          <div class="links">
          Always be up-to-date on the latest news! <br></br>
          Follow us on <a href="https://www.facebook.com/ntention.as/">Facebook</a>, <a href="https://twitter.com/ntention_as">Twitter</a>, <a href="https://www.linkedin.com/company/ntention/">LinkedIn</a> and <a href="https://www.instagram.com/ntention.as/">Instagram</a>.
          </div>
          </section>

          <div class="section">
              <h2>Contact person</h2>
              <div class="contact-column">
                <Image src={portrait} alt="Author" className={'container'}/>
              </div>
              <div class="contact-name">
              <h6>{role}</h6>
              <h3>{author}</h3>
              <div class="symbol">
                  <a href={email}>
                  <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email" className={'symbol'}/>
                  </a>
                  <a href={linkedin}>
                  <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn" className={'symbol'}/>
                  </a>
              </div>
              </div>
          </div>
        </div>
      </div>
    </article>
  </main>
)

// Export Default SinglePost for front-end
const SinglePost = ({ data: { post, allPosts } }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <Layout
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
      socialMediaCard={post.frontmatter.featuredImage || false}

    >
      <SinglePostTemplate
        {...post}
        {...post.frontmatter}
        body={post.html}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SinglePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        template
        subtitle
        date(formatString: "MMMM Do, YYYY")
        author
        authorlink
        excerpt
        role
        portrait
        featuredImage
        email
        linkedin
        postType
        categories {
          category
        }
      }
    }

    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
