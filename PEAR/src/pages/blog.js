import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"

const BlogPage = ({data}) => (
  <Layout>
    <h1>Latest Posts</h1>
    <hr/>
    {data.allMarkdownRemark.edges.map(post =>(
      
        
        <td key = {post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            
            <img src ="https://66.media.tumblr.com/080ba65aaa6d0e1d22fd047c8c649e6e/tumblr_oblslqFoRN1qggwnvo1_1280.jpg" alt = 'oops'></img>
            
            <Link to ={post.node.frontmatter.path}> Read more</Link>
            
            
            <hr/>

        </td>
        
      
    ))}
    
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
