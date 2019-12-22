import React, {Fragment} from 'react';

import Layout from '../components/layout';
import {Grid, Box, TextInput, Text, Heading, Image} from 'grommet';
import Link from 'gatsby-link';
import {Desktop, Mobile, Tablet} from '../components/menu';
import {graphql} from 'gatsby';
import PlainButton from '../components/plainbutton';

const BlogPage = ({ data }) => (
  <Box>
    <Desktop>
      <Fragment>
        <Layout>
          <Grid
            alignSelf="center"
            columns={["flex", "flex","flex"]}
            rows="flex"
            alignContent="center"
            gap="small"
            align='stretch'
            margin={{vertical:"3vw", horizontal:'8vw'}}

          >
            {data.allMarkdownRemark.edges.map(post => (
              <Link to={post.node.fields.slug}>
                <Box justify="center" height="27vw" border={{color: '#d3d3d3', opacity: '100'}}
                hoverIndicator ="black" style={{backgroundColor:"white"}}>
                  <Image
                    style={{ padding: "0px", margin: "0px" }}
                    fit="cover"
                    src={
                      post.node.frontmatter.featuredImage.childImageSharp.fluid
                        .src
                    }
                  />
                    <Heading
                      style={{ margin: "10px" }}
                      alignSelf="center"
                      level="3"
                      margin="medium"
                    >
                      {post.node.frontmatter.title}
                    </Heading>
                    <Text alignSelf="center" size="medium">
                      {" "}
                      Posted by {post.node.frontmatter.author} on{" "}
                      {post.node.frontmatter.date}
                    </Text>

                    <PlainButton
                      text="Read More"
                      target={post.node.fields.slug}
                    />
                </Box>
              </Link>
            ))}
          </Grid>
        </Layout>
      </Fragment>
    </Desktop>

    <Tablet>
      <Layout>
        {data.allMarkdownRemark.edges.map(post => (
          <Link to={post.node.fields.slug}>
            <Box justify="center" margin={{horizontal:"20vw",vertical:"5vh"}} height="50vw"
            style={{backgroundColor:"white"}} border={{color: '#d3d3d3', opacity: '100'}}
            pad={{bottom:"1vh"}}
            
            >
              <Image
                style={{ margin: "0px" }}
                fit="cover"
                src={
                  post.node.frontmatter.featuredImage.childImageSharp.fluid.src
                }
              />
              <br />
              <Heading alignSelf="center" level="2" margin="medium">
                
                {post.node.frontmatter.title}
              </Heading>
              <Text alignSelf="center">
                {" "}
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.date}
              </Text>
              <PlainButton text="Read More" target={post.node.fields.slug} />
            </Box>
          </Link>
        ))}
      </Layout>
    </Tablet>

    <Mobile>
      <Layout>
        {data.allMarkdownRemark.edges.map(post => (
          <Link to={post.node.fields.slug}>
            <Box justify="center" margin={{vertical:"3vw", horizontal:'8vw'}}
                 height="medium" >
              <Image
                style={{ margin: "0px" }}
                fit="cover"
                src={
                  post.node.frontmatter.featuredImage.childImageSharp.fluid.src
                }
              />
              <br />
              <Heading alignSelf="center" level="2" margin="medium">
                
                {post.node.frontmatter.title}
              </Heading>
              <Text alignSelf="center">
                {" "}
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.date}
              </Text>
              <PlainButton text="Read More" target={post.node.fields.slug} />
            </Box>
          </Link>
        ))}
      </Layout>
    </Mobile>
  </Box>
)


export const pageQuery = graphql`
         query MainPageQuery {
           allMarkdownRemark(
             sort: {
               fields: [frontmatter___date, frontmatter___title]
               order: DESC
             }
           ) {
             edges {
               node {
                 fields {
                   slug
                 }
                 frontmatter {
                   title
                   date
                   clientName
                   author
                   tags
                   featuredImage {
                     childImageSharp {
                       fluid(maxWidth: 800, quality: 100) {
                         src
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `;

export default BlogPage;
