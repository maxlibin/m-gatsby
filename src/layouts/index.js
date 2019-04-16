import React, { Component } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import "../styles/crayon.min.css"
import { css } from "glamor"

css.global("html, body", {
  padding: 0,
  margin: 0,
  color: "#fff",
  fontFamily: "Roboto",
  letterSpacing: "1px",
  fontWeight: 100,
  backgroundColor: "#1d1b24",
})

css.global("h1", {
  fontFamily: "PT Sans",
  fontSize: "68px",
  fontWeight: 700,
  margin: 0,
  padding: 0,
})

css.global("h2", {
  fontSize: "20px",
  fontWeight: 300,
  marginBottom: "60px",
  color: "rgba(255,255,255,0.3)",
})

css.global("h3", {
  fontSize: "28px",
  fontWeight: 400,
  marginBottom: "28px",
  color: "rgba(255,255,255,0.8)",
})

css.global("a", {
  textDecoration: "none",
  color: "#fff",
})

css.global("a:hover", {
  color: "#FF6100",
})

css.global("p", {
  color: "rgba(255,255,255, 0.8)",
  fontSize: 19,
  lineHeight: 1.8,
})

const Styles = {
  body: css({
    background: "#1d1b24",
  }),

  container: css({
    maxWidth: "960px",
    margin: "0 auto",
    padding: "0 20px",
    overflow: "auto",
    wordWrap: "break-word",
  }),
}

class DefaultLayout extends Component {
  render() {
    return (
      <div className={Styles.body}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Max li bin - frontend developer based in Singapore</title>
          <title>
            I am based in Singapore, Have a Javascript, React, ReasonMl,
            ReasonReact project you'd like to discuss?
          </title>
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans:700&amp;subset=latin-ext"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,400,700"
            rel="stylesheet"
          />
        </Helmet>

        <div className={Styles.container}>{this.props.children}</div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default DefaultLayout
