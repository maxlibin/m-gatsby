import React, { Component } from "react"
import { css } from "glamor"

import Logo from "../components/Logo"

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

class Header extends Component {
  render() {
    return (
      <>
        <div className={Styles.header}>
          <div className={Styles.container}>
            <a href="/">
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
            </a>
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

        <h2>Sharing my experience and things I have learned:</h2>
      </>
    )
  }
}

export default Header
