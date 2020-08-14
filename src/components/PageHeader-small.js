import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'


import App from './App-small.js'


const PageHeader = ({
  fronttitle,
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => (
    <div class="PageHeader-small">
        <App/>
        <div class="container">
        <h1 className="PageHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle dark" src={subtitle} />
      )}
      </div>
    </div>
)




PageHeader.propTypes = {
  fronttitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
