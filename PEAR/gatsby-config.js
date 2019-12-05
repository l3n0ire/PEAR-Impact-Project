const remark = require('remark')

module.exports = {
  siteMetadata: {
    title: `PEAR Impact Project`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: "images",
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [
          "title",
          "tags",
          "path",
          "author",
          "clientName",
          "excerpt",
          "image",
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            slug: node => node.fields.slug,
            author: node => node.frontmatter.author,
            clientName: node => node.frontmatter.clientName,
            image: node => node.frontmatter.featuredImage,
            excerpt: node => {
              const text = remark()
                .use()
                .processSync(node.rawMarkdownBody)

              const excerptLength = 340 // Hard coded excerpt length
              return (
                String(text)
                  .substring(0, excerptLength)
                  .trimRight() + "..."
              )
            },
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-plugin-netlify-cms-paths`],
      },
    },
    "gatsby-plugin-netlify", //keep this last in array
  ],
}
