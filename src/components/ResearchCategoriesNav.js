import React from 'react'
import { Link } from 'gatsby'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories, enableSearch }) => (
  <div className="PostCategoriesNav">
    <Link className="NavLink-Categories" exact="true" to={`/research/#news`}>
      All
    </Link>
    <Link className="NavLink-Categories" exact="true" to={`/research/artificial-intelligence/#news`}>
      Artificial intelligence
    </Link>
    <Link className="NavLink-Categories" exact="true" to={`/research/artificial-intelligence/#news`}>
      Intuitive interaction
    </Link>
    <Link className="NavLink-Categories" exact="true" to={`/research/artificial-intelligence/#news`}>
      Interface
    </Link>
  </div>
)


export default PostCategoriesNav
