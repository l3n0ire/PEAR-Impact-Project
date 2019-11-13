import React from "react"

import Layout from "../components/layout"
import { Grid, Box, Grommet, Text, InfiniteScroll } from "grommet"



const BlogPage = ({data}) => (
  <Layout>
    <Grid columns = 'medium' rows = 'medium' alignContent = 'center'>
        <InfiniteScroll items = {['1','2','3', '4']}>
          {(item) => (
            <Box justify = 'center'>
              <Text alignSelf = 'center'>{item}</Text>
            </Box>
          )          
          }

        </InfiniteScroll>  
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
