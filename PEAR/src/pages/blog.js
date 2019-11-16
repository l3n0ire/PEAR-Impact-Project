import  React, { Fragment } from "react"

import Layout from "../components/layout"
import { Grid, Box, Grommet, Text, Heading } from "grommet"
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
                <Box justify = 'center' pad = {{'bottom': 'small'}}>
                  <Img fluid ={post.node.frontmatter.featuredImage.childImageSharp.fluid}/>
                  <Heading alignSelf ='center' level = '3' margin = 'medium'>{post.node.frontmatter.title}</Heading>
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
          <Box justify = 'center'margin = 'medium'>

            <Img fluid ={post.node.frontmatter.featuredImage.childImageSharp.fluid}/>
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
                      fluid(maxWidth: 800, maxHeight: 400) {
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
