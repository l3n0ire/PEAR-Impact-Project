import  React, { Fragment } from "react"

import Layout from "../components/layout"
import { Grid, Box, Grommet, Text, Button} from "grommet"
import Link from "gatsby-link"
import { Desktop, Mobile } from "../components/menu"
import { graphql } from "gatsby"
import Img from "gatsby-image"




const BlogPage = ({data}) => (
  <Box>
    <Desktop>
      <Fragment>
        <Layout>
          <Grid
            alignSelf = "center"
            columns = {["45vw","45vw"]} 
            rows = 'medium' 
            alignContent = 'center' 
            gap="large" 
            margin='3vw'>
            
            {data.allMarkdownRemark.edges.map(post =>(
                <Box justify = 'center' border = 'all' pad = {{'bottom': 'small'}}>
                  <Img fluid ={post.node.frontmatter.featuredImage.childImageSharp.fluid}/>
                  <Text alignSelf = 'center'> {post.node.frontmatter.title}</Text>
                  <Text alignSelf ='center'> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</Text>
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

            <Img fluid ={post.node.frontmatter.featuredImage.childImageSharp.fluid}/>
            <Text alignSelf = 'center'> {post.node.frontmatter.title}</Text>
            <Text alignSelf ='center'> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</Text>
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
                   featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                    
                  
                 }
               }
             }
           }
      }

`

export default BlogPage
