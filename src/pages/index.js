import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts"

import Styles from "./IndexStyle";

class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <h2>About:</h2>
        <p>Have a project you'd like to discuss?</p>
        <ul className={Styles.social}>
          <li><a href="">@</a></li>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Twitter</li>
        </ul>

        <h2>My Experience:</h2>
        {
          data.allWordpressPost.edges.map(({ node }) => (
            <div className={Styles.content} key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))
        }
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC, }) {
      totalCount,
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`