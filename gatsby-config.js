module.exports = {
  siteMetadata: {
    title: `Max li bin - Frontend developer`,
    subtitle: `I am based in Singapore, have Javascript, React, ReasonMl, ReasonReact projects you'd like to discuss?`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `blog.maxlibin.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://blog.maxlibin.com/wp-content/uploads/",
          replacementUrl: "https://blog.maxlibin.com/wp-content/uploads/",
        },
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: ["/wp/v2/search", "/wp/v2/block-renderer"],
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-55191105-2",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-favicon`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
  ],
}
