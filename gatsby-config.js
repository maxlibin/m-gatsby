module.exports = {
  siteMetadata: {
    title: `A sample site using gatsby-source-wordpress`,
    subtitle: `Data fetched from a site hosted on wordpress.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `blog.maxlibin.com`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
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
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maxlibin - frontend developer based in Singapore`,
        short_name: `Singapore frontend developer`,
        start_url: `/posts`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-55191105-2",
      },
    },
    `gatsby-plugin-favicon`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
  ],
}
