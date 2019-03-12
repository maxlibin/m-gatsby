import React, { Component } from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";

import Styles from "./indexStyle";

class DefaultLayout extends Component {
  render() {
    return (
      <div className={Styles.body}>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&amp;subset=latin-ext" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i" rel="stylesheet" />
        </Helmet>
        
        
        <div className={Styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
}

export default DefaultLayout