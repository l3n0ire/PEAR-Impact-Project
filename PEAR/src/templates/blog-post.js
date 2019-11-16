import React from 'react'

import Link from 'gatsby-link'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { Button, Box } from "grommet"

export default function Template({data}) {
    const post  = data.markdownRemark
    return (
      <Layout>
        <Box pad = 'large'>
          <h1>{post.frontmatter.title}</h1>
          <h4>
            Posted by: {post.frontmatter.author} on {post.frontmatter.date}
          </h4>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: {path: { eq: $path}}){
            html
            frontmatter {
                path
                title
                author
                date
                
                          
            }

        }
    }

`
