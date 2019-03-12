import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"

import {css} from "glamor";

const Styles = {
  head: css({
    padding: "60px 0 0",
  }),

  post: css({
    marginTop: "40px"
  }),
}

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <div className={Styles.head}>
          <div className={Styles.container}>
            <Link to="/">
              <Logo size={0.5} />
            </Link>
          </div>
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`