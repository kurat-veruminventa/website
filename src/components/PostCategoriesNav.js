import React from 'react'
import { Link } from 'gatsby'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories, enableSearch }) => (
  <div className="PostCategoriesNav">
    <Link className="NavLink-Categories" exact="true" to={`/press/#news`}>
      All
    </Link>
    <Link className="NavLink-Categories" exact="true" to={`/press/press-releases/#news`}>
      Press releases
    </Link>
    <Link className="NavLink-Categories" exact="true" to={`/press/events/#news`}>
      Events and presentations
    </Link>
    <Link className="NavLink-Categories" exact="true" to={`/press/newsletters/#news`}>
      Newsletters
    </Link>
  </div>
)

export default PostCategoriesNav

/*
{categories.map((category, index) => (
  <Link
    exact="true"
    className="NavLink-Categories"
    key={category.title + index}
    to={category.slug}
  >
    {category.title}
  </Link>
))}

{enableSearch && <BlogSearch />}
*/
