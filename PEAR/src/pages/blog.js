import  React, { Fragment } from "react"

import Layout from "../components/layout"
import { Grid, Box, Grommet, Text, Heading ,Image} from "grommet"
import Link from "gatsby-link"
import { Desktop, Mobile } from "../components/menu"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PlainButton from "../components/plainbutton"


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
                <Box justify = 'center' height='55vh'>
                  <Image style={{margin:'0px'}} fit="cover" src ={post.node.frontmatter.featuredImage.childImageSharp.resolutions.src}/>
                  <Heading style={{margin:'10px'}}alignSelf ='center' level = '3' margin = 'medium'>{post.node.frontmatter.title}</Heading>
                  <Text alignSelf ='center'> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</Text>
                  
                  
                  <PlainButton text = 'Read More' target = {post.node.frontmatter.path}/>
                  
              </Box>
            ))}

          </Grid>
        </Layout>
      </Fragment>
    </Desktop>
    <Mobile>
      <Layout>
        {data.allMarkdownRemark.edges.map(post =>(
          <Box justify = 'center' margin = 'medium'>

            <Image style={{margin:'0px'}}fit="cover" src ={post.node.frontmatter.featuredImage.childImageSharp.resolutions.src}/>
            <br/>
            <Heading alignSelf ='center' level = '3' margin = 'medium'>{post.node.frontmatter.title}</Heading>
            <Text alignSelf ='center'> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</Text>
            <PlainButton text = 'Read More' target = {post.node.frontmatter.path}/>

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
                      resolutions(quality: 100) {
                        src
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
