import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'


import App from './App.js'


const PageHeader = ({
  fronttitle,
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => (
    <div class="PageHeader">
        <App/>
        <div class="container">
        <h1 className="PageHeader--Title">{title}</h1>
        <h1 className="PageHeader--FrontTitle">{fronttitle}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
      )}
        <div class="frontimage">
            <Image src="https://cdn.image4.io/ntention/f_auto/Assets/7d629b29-24c7-4307-b75a-bf47866fe9c4.Png" alt=""/>
        </div>
      </div>
    </div>
)




PageHeader.propTypes = {
  fronttitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
