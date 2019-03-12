import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts"

import Logo from "../components/Logo";

import Styles from "./IndexStyle";

class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div className={Styles.header}>
          <div className={Styles.container}>
            <h1>              
              <span className={Styles.block}>
                <span className={Styles.symbol}>&lt;</span>
                Hi
                <span className={Styles.symbol}>/&gt;</span>
              </span>
              <span className={Styles.block}>I am <Logo />,</span>
              <span className={Styles.block}>Frontend developer</span>
            </h1>
          </div>
        </div>

        <h2>About:</h2>
        <p>I am based in Singapore, Have a project you'd like to discuss?</p>
        <ul className={Styles.social}>
          <li><a href="mailTo:me@maxlibin.com" target="_blank" rel="noreferrer noopener">@</a></li>
          <li><a href="https://sg.linkedin.com/in/maxlibin" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
          <li><a href="https://github.com/maxlibin" target="_blank" rel="noreferrer noopener">GitHub</a></li>
          <li><a href="https://twitter.com/maxlibin" target="_blank" rel="noreferrer noopener">Twitter</a></li>
        </ul>

        <h2>My Experience:</h2>
        {
          data.allWordpressPost.edges.map(({ node }) => (
            <div className={Styles.content} key={node.slug}>
              <Link to={node.slug}>
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