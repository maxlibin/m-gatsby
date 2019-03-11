import React, { Component } from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";
import { Link } from "gatsby";
import Logo from "../components/Logo";

import Styles from "./indexStyle";

class DefaultLayout extends Component {
  render() {
    return (
      <div className={Styles.body}>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&amp;subset=latin-ext" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i" rel="stylesheet" />
        </Helmet>
        <div className={Styles.header}>
          <div className={Styles.container}>
            <h1>              
              <Link to="/">
                <span className={Styles.block}>
                  <span className={Styles.symbol}>&lt;</span>
                  Hi
                  <span className={Styles.symbol}>/&gt;</span>
                </span>
                <span className={Styles.block}>I am <Logo />,</span>
                <span className={Styles.block}>Frontend developer</span>
              </Link>
            </h1>
          </div>
        </div>

        <div>
          <div className={Styles.container}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default DefaultLayout