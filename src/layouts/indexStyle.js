import {css} from "glamor";

css.global('html, body',  {
  padding: 0,
  margin: 0,
  color: "#fff",
  fontFamily: 'Roboto',
  letterSpacing: '1px',
  fontWeight: 100,
});

css.global('h1',  {
  fontFamily: "PT Sans",
  fontSize: "68px",
  fontWeight: 700,
  margin: 0,
  padding: 0,
});

css.global('h2',  {
  fontSize: "20px",
  fontWeight: 300,
  marginBottom: "60px",
  color: "rgba(255,255,255,0.3)"
});

css.global('h3',  {
  fontSize: "28px",
  fontWeight: 400,
  marginBottom: "28px",
  color: "rgba(255,255,255,0.8)"
});

css.global('a',  {
  textDecoration: "none",
  color: "#fff",
});

css.global('p',  {
  color: "rgba(255,255,255, 0.7)",
  fontSize: 18,
  lineHeight: 1.8,
});


const Styles = {
  body: css({
    background: '#1d1b24',
  }),

  container: css({
    maxWidth: '960px',
    margin: "0 auto",
    padding: 0,
  }),

  header: css({
    width: "100%",
    height: "380px",
    padding: "80px 0 0 0"
  }),

  block: css({
    display: "block",
  }),

  symbol: css({
    fontWeight: 400,
    opacity: 0.2,
    fontSize: 24,
  }),
}

export default Styles;