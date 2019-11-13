import React from "react"

import Layout from "../components/layout"
import { Grid, Box, Grommet, Text, InfiniteScroll } from "grommet"
import Link from "gatsby-link"



const BlogPage = ({data}) => (
  <Layout>
        

    <Grid columns = 'medium' rows = 'medium' alignContent = 'center' gap="large" margin='large'>

        
    {data.allMarkdownRemark.edges.map(post =>(
            <Box justify = 'center' border = 'all'>
              <Text alignSelf = 'center'> {post.node.frontmatter.title}</Text>
              <Text alignSelf ='center'> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</Text>
              <hr></hr>
              <Link to ={post.node.frontmatter.path}>
                    Read more
                  </Link>

            </Box>
                 ))}

      </Grid>

  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark{
             edges{
               node{
                id
                 frontmatter{
                   path
                   title
                   date
                   author
                 }
               }
             }
           }
      }

`

export default BlogPage
