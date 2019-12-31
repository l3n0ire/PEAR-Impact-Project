const remark = require('remark')
var strip = require('strip-markdown')

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
        name: `assets`,
        path: `${__dirname}/static/images`,
      },
    },
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
        icon: `src/images/leaf.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [  
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [
          "title",
          "date",
          "tags",
          "path",
          "author",
          "clientName",
          "excerpt",
          "featuredImage",
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            date: node => node.frontmatter.date,
            tags: node => node.frontmatter.tags,
            slug: node => node.fields.slug,
            author: node => node.frontmatter.author,
            clientName: node => node.frontmatter.clientName,
            featuredImage: node => node.frontmatter.featuredImage
            ,

            //image: node => node.frontmatter.childImageSharp.fluid.base64,
            excerpt: node => {
              const text = remark()
                .use(strip)
                .processSync(node.rawMarkdownBody)

              const excerptLength = 240 // Hard coded excerpt length
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
    
    "gatsby-plugin-netlify", //keep this last in array
  ],
}
