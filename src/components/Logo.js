import React from "react";
import Styles from "./logoStyle";

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