import React from "react"
import Link from "gatsby-link"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"


import Layout from "../components/layout"



const BlogPage = ({data}) => (
  <Layout>
    <h1>Latest Posts</h1>
    <Grid container 
    direction="row"
    justify="center"
    alignItems="center"
    spacing={5}>
          {data.allMarkdownRemark.edges.map(post =>(
            <Grid item key={post.node.id}>
              <Card>
                  <CardContent>
                  <Typography variant="h5">{post.node.frontmatter.title}</Typography>
                  <Typography color="textSecondary">
                    Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
                  </Typography>
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
