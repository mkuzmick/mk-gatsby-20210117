/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`)

  exports.onCreateNode = ({ node, getNode, actions }) => {
      const { createNodeField } = actions
      if (node.internal.type === `Mdx`) {
          console.log(`found mdx node of type ${node.internal.type}`)
          const fileNode = getNode(node.parent)
          const slugStem = createFilePath({ node, getNode })
          const slugRoot = fileNode.sourceInstanceName ? fileNode.sourceInstanceName : "content"
          createNodeField({
              node,
              name: `slug`,
              value: `/${slugRoot}${slugStem}`,
          })
        }
    }