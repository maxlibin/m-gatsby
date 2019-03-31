const path = require(`path`)
const slash = require(`slash`)
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
            excerpt
            title
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)

  allWordpressPage.edges.forEach((edge, index) => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)

  createPaginatedPages({
    edges: allWordpressPost.edges,
    createPage: createPage,
    pageTemplate: "src/templates/posts.js",
    pageLength: 10,
    pathPrefix: "posts",
  })

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        skip: edge.node.skip,
      },
    })
  })
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
