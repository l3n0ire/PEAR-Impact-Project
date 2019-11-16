import React from 'react'

import Link from 'gatsby-link'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { Box, Heading, Grid } from "grommet"

export default function Template({data}) {
    const post  = data.markdownRemark
    return (

      <Layout>
        <Box pad = 'large'>
          <Heading>{post.frontmatter.title}</Heading>
          <Heading level = '4'>Posted by: {post.frontmatter.author} on {post.frontmatter.date}</Heading>
          <div dangerouslySetInnerHTML={{ __html: post.html }}/>
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
