import React, { Component } from "react"
import Link from "gatsby-link"
import { css } from "glamor"

import Logo from "../components/Logo"
import Layout from "../layouts"

const Styles = {
  content: css({
    marginBottom: "80px",
  }),

  header: css({
    width: "100%",
    padding: "100px 0 80px 0",
  }),

  block: css({
    display: "block",
  }),

  symbol: css({
    fontWeight: 400,
    opacity: 0.2,
    fontSize: 24,
  }),

  social: css({
    display: "flex",
    listStyle: "none",
    margin: "0 0 80px 0",
    padding: 0,

    "> li": {
      margin: "0 10px",
      opacity: 0.9,

      ":first-child": {
        marginLeft: 0,
      },
    },
  }),

  readMore: css({
    opacity: 0.8,
    fontSize: "20px",
  }),

  arrowRight: css({
    width: "25px",
    display: "inline-block",
    position: "relative",
    top: "6px",
    left: "10px",

    "> svg": {
      width: "100%",
    },
  }),

  navLink: css({
    marginBottom: "60px",
  }),
}

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

class Posts extends Component {
  render() {
    const {
      pageContext: { group, index, first, last },
    } = this.props

    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString()
    const nextUrl = (index + 1).toString()

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
              <span className={Styles.block}>
                I am <Logo />,
              </span>
              <span className={Styles.block}>Frontend developer</span>
            </h1>
          </div>
        </div>
        <h2>About:</h2>
        <p>I am based in Singapore, have a project you'd like to discuss?</p>
        <ul className={Styles.social}>
          <li>
            <a
              href="mailTo:me@maxlibin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              @
            </a>
          </li>
          <li>
            <a
              href="https://sg.linkedin.com/in/maxlibin"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/maxlibin"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/maxlibin"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
          </li>
        </ul>

        <h2>My Experience:</h2>
        {group.map(({ node }) => (
          <div className={Styles.content} key={node.slug}>
            <Link to={node.slug}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <Link to={node.slug} className={Styles.readMore}>
              Read more{" "}
              <span className={Styles.arrowRight}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                  <path
                    fill="#fff"
                    d="M745,753l245-245L745,263l-52.5,52.5L850,473H10v70h840L692.5,700.5L745,753z"
                  />
                </svg>
              </span>
            </Link>
          </div>
        ))}
        <div className="navLink">
          <div className="previousLink">
            <NavLink
              test={first}
              url={index === 2 ? "/" : "/posts/" + previousUrl}
              text="Go to Previous Page"
            />
          </div>
          <div className={Styles.navLink}>
            <NavLink
              test={last}
              url={"/posts/" + nextUrl}
              text="Go to Next Page"
            />
          </div>
        </div>
      </Layout>
    )
  }
}
export default Posts
