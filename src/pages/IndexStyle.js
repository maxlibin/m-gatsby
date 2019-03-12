import {css} from "glamor";

const Styles = {
  content: css({
    marginBottom: "80px"
  }),

  header: css({
    width: "100%",
    padding: "100px 0 80px 0"
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
      }
    }
  })
}

export default Styles;