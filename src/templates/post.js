import React, { Component } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "glamor"

import Logo from "../components/Logo"
import Layout from "../layouts"

const Styles = {
  head: css({
    padding: "60px 0 0",
  }),

  post: css({
    marginTop: "40px",
  }),

  metaData: css({
    opacity: 0.5,
    fontStyle: "Normal",
    display: "block",
    marginTop: "20px",
    marginBottom: "40px",
  }),
}

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <Helmet>
          <meta title={post.title} />
          <meta property="og:title" content={post.title} />

          <title>{post.title}</title>
        </Helmet>
        <div className={Styles.head}>
          <div className={Styles.container}>
            <Link to="/">
              <Logo size={0.5} />
            </Link>
          </div>
        </div>
        <div className={Styles.post}>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <cite className={Styles.metaData}>posted on {post.date}</cite>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "DD MMMM YYYY")
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
