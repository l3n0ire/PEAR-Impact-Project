import React from "react"

import Layout from "../components/layout"
import { Grid, Box, Grommet, Text, InfiniteScroll ,Image, Button} from "grommet"
import Link from "gatsby-link"



const BlogPage = ({data}) => (
  <Layout>
        

    <Grid columns = 'medium' rows = 'medium' alignContent = 'center' gap="large" margin='large'>

        
    {data.allMarkdownRemark.edges.map(post =>(
            <Box justify = 'center' border = 'all'>
                  <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />

              <Text alignSelf = 'center'> {post.node.frontmatter.title}</Text>
              <Text alignSelf ='center'> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</Text>
              <hr></hr>
              <Box alignSelf ='center' pad = 'small'><Link to ={post.node.frontmatter.path}><Button label = 'Read More'></Button></Link></Box>

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
