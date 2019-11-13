import  React, { Fragment } from "react"

import Layout from "../components/layout"
import { Grid, Box, Grommet, Text, InfiniteScroll ,Image, Button} from "grommet"
import Link from "gatsby-link"
import { Desktop, Mobile } from "../components/menu"



const BlogPage = ({data}) => (
  <Box>
    <Desktop>
      <Fragment>
        <Layout>
          <Grid columns = 'medium' rows = 'medium' alignContent = 'center' gap="medium" margin='small'>
            
            {data.allMarkdownRemark.edges.map(post =>(
                <Box justify = 'center' border = 'all'>
                
                  <Image fit="contain" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                  <Text alignSelf = 'center'> {post.node.frontmatter.title}</Text>
                  <Text alignSelf ='center'> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</Text>
                  <hr></hr>
                  <Box alignSelf ='center' pad = 'small'><Link to ={post.node.frontmatter.path}><Button label = 'Read More'></Button></Link></Box>

              </Box>
            ))}

          </Grid>
        </Layout>
      </Fragment>
    </Desktop>
    <Mobile>
      <Layout>
        {data.allMarkdownRemark.edges.map(post =>(
          <Box justify = 'center' border = 'all' margin = 'medium'>
              
            <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
            <Text alignSelf = 'center'> {post.node.frontmatter.title}</Text>
            <Text alignSelf ='center'> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</Text>
            <hr></hr>
            <Box alignSelf ='center' pad = 'small'><Link to ={post.node.frontmatter.path}><Button label = 'Read More'></Button></Link></Box>

          </Box>
        ))}
      </Layout>
    </Mobile>
  </Box>
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
