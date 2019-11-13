import React from "react"

import Layout from "../components/layout"
import { Grid, Box, Grommet, Text } from "grommet"



const BlogPage = ({data}) => (
  <Layout>

<h1>Latest Posts</h1>
    <Grid container
    rows = {['15vh', '65vh', '10vh', '20vh']}
    columns = {['full']}
    areas = {[
      { name: 'header', start: [0, 0], end: [0, 0] },
      { name: 'content', start: [0, 1], end: [0, 1] },
      { name: 'footer', start: [0, 3], end: [0, 3] }

    ]}
    >
          {data.allMarkdownRemark.edges.map(post =>(
            <Grid item key={post.node.id}>
              <Card>
                  <CardContent>
                  <Text variant="h5">{post.node.frontmatter.title}</Text>
                  <Text color="textSecondary">
                    Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
                  </Text>
                  <br/><br/>
                  <Link to ={post.node.frontmatter.path}>
                    Read more
                  </Link>
                  <br/><br/>
                </CardContent>
              </Card>
            </Grid>
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
