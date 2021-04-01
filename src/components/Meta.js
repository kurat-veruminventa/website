import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

export const query = graphql`
  fragment Meta on MarkdownRemark {
    frontmatter {
      meta {
        title
        description
        noindex
        canonicalLink
        absoluteImageUrl
        type
      }
    }
  }
`

export default class Meta extends Component {
  render() {
    const {
      title,
      url,
      description,
      date,
      absoluteImageUrl = '',
      twitterSiteAccount,
      twitterCreatorAccount,
      noindex,
      canonicalLink,
      type,
      siteTitle,
      siteDescription,
      googleTrackingId
      // overwrite { title, description } if in fields or fields.meta
    } = this.props

    return (
      <Helmet>
        {title && <title>{title}</title>}
        {title && <meta property="og:title" content={title} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {url && <meta property="og:type" content={type} />}
        {url && <meta property="og:url" content={url} />}
        {twitterSiteAccount && (
          <meta name="twitter:site" content="@ntention_as" />
        )}
        {twitterCreatorAccount && (
          <meta name="twitter:creator" content="@ntention_as" />
        )}
        {noindex && <meta name="robots" content="noindex" />}
        {canonicalLink && <link rel="canonical" href={canonicalLink} />}


        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta property="og:image:secure_url" content={absoluteImageUrl} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={date} />
        <meta name="twitter:card" content="summary_large_image" />

        {googleTrackingId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
          />
        )}

        {googleTrackingId && (
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleTrackingId}');
            `}
          </script>
        )}
      </Helmet>
    )
  }
}
