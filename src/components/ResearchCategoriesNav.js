import React from 'react'
import { Link } from 'gatsby'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories, enableSearch }) => (
  <div className="PostCategoriesNav">
    <Link className="NavLink-Categories" exact="true" to={`/research/#news`}>
      All
    </Link>
    <Link className="NavLink-Categories" exact="true" to={`/research/interaction/#news`}>
      Interaction
    </Link>
  </div>
)


export default PostCategoriesNav
