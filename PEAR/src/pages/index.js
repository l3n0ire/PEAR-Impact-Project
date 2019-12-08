import React, {Fragment} from 'react';

import Layout from '../components/layout';
import {Grid, Box, TextInput, Text, Heading, Image} from 'grommet';
import Link from 'gatsby-link';
import {Desktop, Mobile} from '../components/menu';
import {graphql} from 'gatsby';
import PlainButton from '../components/plainbutton';

const BlogPage = ({data}) => (
  <Box>
    <Desktop>
      <Fragment>
        <Layout>
          <Grid
            alignSelf="center"
            columns={['45vw', '45vw']}
            rows="flex"
            alignContent="center"
            gap="large"
            margin="3vw"
          >
            {data.allMarkdownRemark.edges.map((post) => (
              <Link to={post.node.fields.slug}>
                <Box
                  justify="center"
                  height="55vh"
                  background={{color: 'light-3'}}
                >
                  <Image
                    style={{padding: '10px', margin: '0px'}}
                    fit="cover"
                    src={
                      post.node.frontmatter.featuredImage.childImageSharp.fluid
                          .src
                    }
                  />
                  <Heading
                    style={{margin: '10px'}}
                    alignSelf="center"
                    level="3"
                    margin="medium"
                  >
                    {post.node.frontmatter.title}
                  </Heading>
                  <Text alignSelf="center">
                    {' '}
                    Posted by {post.node.frontmatter.author} on{' '}
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
    <Mobile>
      <Layout>
        {data.allMarkdownRemark.edges.map((post) => (
          <Link to={post.node.fields.slug}>
            <Box justify="center" margin="medium" height="medium">
              <Image
                style={{margin: '0px'}}
                fit="cover"
                src={
                  post.node.frontmatter.featuredImage.childImageSharp.fluid.src
                }
              />
              <br />
              <Heading alignSelf="center" level="3" margin="medium">
                {post.node.frontmatter.title}
              </Heading>
              <Text alignSelf="center">
                {' '}
                Posted by {post.node.frontmatter.author} on{' '}
                {post.node.frontmatter.date}
              </Text>
              <PlainButton text="Read More" target={post.node.fields.slug} />
            </Box>
          </Link>
        ))}
      </Layout>
    </Mobile>
  </Box>
);


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
