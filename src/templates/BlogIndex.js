import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'

import PageHeader from '../components/PageHeader-small'
import PostSection from '../components/PostSection'
import PostCategoriesNav from '../components/PostCategoriesNav'
import Layout from '../components/Layout'

import Image from '../components/Image'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

/**
 * Filter posts by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {posts} object
 */
export const byDate = posts => {
  const now = Date.now()
  return posts.filter(post => Date.parse(post.date) <= now)
}

/**
 * filter posts by category.
 *
 * @param {posts} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (posts, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? posts.filter(byCategory) : posts
}

// Export Template for use in CMS preview
export const BlogIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  posts = [],
  postCategories = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      let filteredPosts =
        posts && !!posts.length
          ? byCategory(byDate(posts), title, contentType)
          : []

      let queryObj = location.search.replace('?', '')
      queryObj = qs.parse(queryObj)

      if (enableSearch && queryObj.s) {
        const searchTerm = queryObj.s.toLowerCase()
        filteredPosts = filteredPosts.filter(post =>
          post.frontmatter.title.toLowerCase().includes(searchTerm)
        )
      }

      return (
        <main className="Blog">
          <PageHeader
            /*title={title}*/
            title='Press & Media'
            subtitle={subtitle}
            backgroundImage={featuredImage}
          />
          &nbsp;

          &nbsp;

          &nbsp;

          &nbsp;

          &nbsp;

          &nbsp;
          <div class="container space-100t">
              <div class="row"><h2>For media or press inquires</h2>
                <div class="column3">
                <h6>Chief Marketing Officer</h6><h2>
              Vegard J. Løwe</h2>Contact our CMO for general media inquires or brand related requests concerning the Ntention’s public relations.
              </div>
              <div class="column3"></div>
              </div>
          </div>



          <div class="container space-100t">
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
                    <div class="column5 logo-hover ">
                        <a href="https://interestingengineering.com/smart-gloves-will-help-astronauts-to-control-drones-robots-and-explore-space">
                        <Image src="https://i.ibb.co/5sdzMc2/Interesting-engineering.png" alt="Interesting Engineering" />
                        </a>
                    </div>
                  </div>
              </div>
          </div>

          <div class="container space-100t" id="news">
            <h2>News and events</h2>
          </div>

          {!!postCategories.length && (
            <section className="section thin">
              <div className="container">
                <PostCategoriesNav enableSearch categories={postCategories} />
              </div>
            </section>
          )}


          {!!posts.length && (
            <section className="section space-100b">
              <div className="container">
                <PostSection posts={filteredPosts} />
              </div>
            </section>
          )}
        </main>
      )
    }}
  </Location>
)

// Export Default BlogIndex for front-end
const BlogIndex = ({ data: { page, posts, postCategories } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <BlogIndexTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      posts={posts.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
      postCategories={postCategories.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default BlogIndex

export const pageQuery = graphql`
  ## Query for BlogIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query BlogIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        title
        excerpt
        template
        subtitle
        featuredImage
      }
    }

    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            categories {
              category
            }
            featuredImage
          }
        }
      }
    }
    postCategories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postCategories" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
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
