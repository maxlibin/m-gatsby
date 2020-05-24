import React, { Component } from "react"
import Link from "gatsby-link"
import { css } from "glamor"
import Header from "../layouts/header"
import Layout from "../layouts"

const Styles = {
  content: css({
    marginBottom: "80px",
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
        <Header />
        {group.map(({ node }) => (
          <div className={Styles.content} key={node.slug}>
            <Link to={node.slug}>
              <h3>{node.title}</h3>
            </Link>
            <cite datetime={node.date}>{node.date}</cite>
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
