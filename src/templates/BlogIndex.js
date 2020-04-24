import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'

import PageHeader from '../components/PageHeader-small'
import PostSection from '../components/PostSection'
import PostCategoriesNav from '../components/PostCategoriesNav'
import Layout from '../components/Layout'

import Image from '../components/Image'


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
              <div class="symbol">
                  <a href="mailto:vegardjl@ntention.com">
                  <Image src="https://cdn.image4.io/ntention/f_auto/Assets/cd0d44e1-835d-467a-9f49-e35cf901c613.Jpeg" alt="Email Vegard J. Løwe" />
                  </a>
                  <a href="https://www.linkedin.com/in/vegard-lowe/">
                  <Image src="https://cdn.image4.io/ntention/f_auto/Assets/bb043d95-c639-42bc-bf76-07d0c03e09e6.Jpeg" alt="LinkedIn Vegard J. Løwe" />
                  </a>
              </div>
              </div>
              <div class="column3"></div>
              </div>
          </div>


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

          <section className="row section space-100t">
            <div className="container">
                <div class="column">
                    <h6>Finansavisen — Mar 23, 2020</h6>
                    <h4><a href="https://finansavisen.no/lordag/gruenderintervjuet/2020/03/22/7506069/gruenderintervjuet-nasa-vil-ha-ntnu-studentenes-smarthansker">NASA wants NTNU students' smart gloves [Norwegian]</a></h4>
                    <div class="links">
                    When the drone trend took off a few years back, NTNU student Magnus Arveng thought he would make a glove that could control them. Just like in the sci-fi movies ... <a href="https://finansavisen.no/lordag/gruenderintervjuet/2020/03/22/7506069/gruenderintervjuet-nasa-vil-ha-ntnu-studentenes-smarthansker">Read more</a>
                    </div>
                </div>
                <div class="column">
                    <h6>Forbes — Nov 5, 2019</h6>
                    <h4><a href="https://www.forbes.com/sites/elizabethhowell1/2019/11/05/space-drones-could-fly-around-the-moon-via-smart-gloves/#2e968f6d4290">Space Drones Could Fly Around The Moon Via ‘Smart Gloves’</a></h4>
                    <div class="links">
                    The rise of artificial intelligence, machine learning and other buzzwords about smart computers means it’s very possible that a small drone could do a lot of work ahead of ... <a href="https://www.forbes.com/sites/elizabethhowell1/2019/11/05/space-drones-could-fly-around-the-moon-via-smart-gloves/#2e968f6d4290">Read more</a>
                    </div>
                </div>
            </div>
          </section>
          <section className="row space-100b">
            <div className="container">
                <div class="column">
                    <h6>Voice of America — Feb 25, 2020</h6>
                    <h4><a href="https://www.voanews.com/episode/new-smart-glove-mars-and-lunar-missions-works-magic-4202736">A New Smart Glove for Mars and Lunar Missions Works Like Magic</a></h4>
                    <div class="links">
                    Spacesuits are extremely difficult to move in, making it challenging for astronauts to do basic tasks like picking up a rock. A NASA partner has teamed with a ... <a href="https://www.voanews.com/episode/new-smart-glove-mars-and-lunar-missions-works-magic-4202736">Read more</a>
                    </div>
                </div>
                <div class="column">
                    <h6>Inverse — Nov 1, 2019</h6>
                    <h4><a href="https://www.inverse.com/article/60614-astronaut-smart-glove">Smart Gloves Will Give Mars Astronauts The Power To Control Robots</a></h4>
                    <div class="links">
                    The group’s smart glove is designed to let astronauts control remote technology like drones with literally just a flick of the wrist. The glove was designed ... <a href="https://www.inverse.com/article/60614-astronaut-smart-glove">Read more</a>
                    </div>
                </div>
            </div>
          </section>

          <div class="container space-100t" id="news">
            <h2>News and events</h2>
          </div>

          {!!postCategories.length && (
            <section className="section thin">
              <div className="container">
                <PostCategoriesNav enableSearch categories={postCategories} />
              </div>
              <div className="container space-20t space-100b">
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
