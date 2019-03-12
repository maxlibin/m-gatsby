import React from "react";
import {css} from "glamor";

const Styles = css(
  {
    position: "relative",
    color: "#3DA5D9",
    fontSize: "68px",
    fontWeight: 700,
    textShadow: "5px 1px 0 rgba(255,255,255, 0.05)",

    "::after": {
      content: "Max",
      height: "50px",
      overflow: "hidden",
      position: "absolute",
      top: -2,
      left: 0,
      color: "#FF6100",
      zIndex: 9,
    },

    "::before": {
      content: " ",
      display: "block",
      width: "140px",
      height: "50px",
      overflow: "hidden",
      position: "absolute",
      top: 0,
      left: 0,
      background: "#1d1b24",
      zIndex: 1,
    },
  }
);

const Logo = props => {
  return (
    <span
      className={Styles}
      style={
        props && props.size
          ? {transformOrigin: "left top", display: "inline-block", transform: `scale(${props.size})`}
          : null
      }
    >
      Max
    </span>
  )
}
export default Logo