module.exports = {
  siteMetadata: {
    title: `A sample site using gatsby-source-wordpress`,
    subtitle: `Data fetched from a site hosted on wordpress.com`,
  },
  plugins: [
    // https://public-api.wordpress.com/wp/v2/sites/gatsbyjsexamplewordpress.wordpress.com/pages/
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `blog.maxlibin.com`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
        perPage: 20,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: [
          "/wp/v2/search",
          "/wp/v2/block-renderer",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-55191105-2"
      },
    },
    `gatsby-plugin-favicon`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`
  ],
}