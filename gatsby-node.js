const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');
const {fmImagesToRelative} = require('gatsby-remark-relative-images');

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;
  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = ({actions, graphql}) =>{
  const {createPage} = actions;

  const postTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`
      query QueryPosts {
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___date, frontmatter___title]
            order: DESC
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                clientName
                author
                countryCode
              }
            }
          }
        }
      }
    `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        component: postTemplate,
        path: node.fields.slug,
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};
