import React from 'react'

import Link from 'gatsby-link'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { Box, Heading, Grommet, Button } from "grommet"


export default function Template({data}) {
    const post  = data.markdownRemark
    const tags = post.frontmatter.tags
    return (
      <Layout>
        <Box pad = 'large'>
          <Heading>{post.frontmatter.title}</Heading>
          <Heading level = '4'>Posted by: {post.frontmatter.author} on {post.frontmatter.date}</Heading>
          <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        </Box>
        {tags.length > 0 ? (
        <Grommet theme={{global:{hover:{color: 'dark-1'}}}}>
        <Box direction='row' gap='large' pad='large' alignContent='center'>
          <Box alignSelf='center' margin='none' pad='none'>
            <Heading pad='none' margin='none' level='4'>Tags:</Heading>
          </Box>
            { tags.map(tag => (
              
              <Box style={{borderRadius: '5px'}} background='light-2'>
                <Button 
                style={{ 
                  borderRadius: '5px',
                  padding: '5px',
                  transition: '0.25s'
                }} 
                color='black'
                hoverIndicator='light-4' 
                plain
                href={'/search?q=' + tag}
                label={tag}/>
              </Box>
            ))}
        </Box>
        </Grommet>
        ) :  (null)}
      </Layout>
      
    )
}

export const postQuery = graphql`
         query BlogPostByPath($slug: String!) {
           markdownRemark(fields: { slug: { eq: $slug } }) {
             frontmatter {
               featuredImage {
                 childImageSharp {
                   fluid(maxWidth: 1500) {
                     src
                   }
                 }
               }
               date
               clientName
               author
               title
               tags
             }
             html
           }
         }
       `
