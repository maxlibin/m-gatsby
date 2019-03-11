import {css} from "glamor";

const Styles = {
  content: css({
    marginBottom: "80px"
  }),
  social: css({
    display: "flex",
    listStyle: "none",
    margin: "0 0 80px 0",
    padding: 0,

    "> li": {
      margin: "0 10px",

      ":first-child": {
        marginLeft: 0,
      }
    }
  })
}

export default Styles;