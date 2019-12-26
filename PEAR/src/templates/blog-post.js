import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {Box, Heading, Grommet, Button, Image} from 'grommet';
import {Mobile, Desktop, Tablet} from '../components/menu';
import Tag from '../components/tag'

var dateFormat = require('dateformat');

export default function Template({data}) {
  const post = data.markdownRemark;
  const tags = post.frontmatter.tags;
  return (
    <Layout>
      <Desktop>
        <Box
         height ="50vh"
         background = {"url("+post.frontmatter.featuredImage.childImageSharp.fluid.src+")"}
         pad="8vw"
         >
          <Heading color="white" alignSelf="center" 
            margin="auto">
            {post.frontmatter.title}
          </Heading>
        </Box>
        <Box pad={{vertical:"large"}} margin={{horizontal:'8vw'}} align="center">
          <div style={{ margin:"0px, auto", width:"50vw", minWidth:"700px"}}>
          <Tag tags={tags}></Tag>
          <Heading level="4">
            By: {post.frontmatter.author}<br/>
            {dateFormat(new Date(post.frontmatter.date),"mmmm d, yyyy")}
          </Heading>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
          </div>
        </Box>
      </Desktop>
      
      <Tablet>
        <Box
          height ="50vh"
          background = {"url("+post.frontmatter.featuredImage.childImageSharp.fluid.src+")"}
          pad="8vw"
          >
            <Heading color="white" alignSelf="center" 
              margin="auto">
              {post.frontmatter.title}
            </Heading>
        </Box>

        <Box pad={{vertical:"large"}} margin={{horizontal:'8vw'}}>
          <Tag tags={tags}></Tag>
          <Heading level="4">
            By: {post.frontmatter.author}<br/>
            {dateFormat(new Date(post.frontmatter.date),"mmmm d, yyyy")}
          </Heading>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </Box>

      </Tablet>

      <Mobile>
        <Box
          height ="50vh"
          background = {"url("+post.frontmatter.featuredImage.childImageSharp.fluid.src+")"}
          pad="8vw"
          >
            <Heading color="white" alignSelf="center" 
              margin="auto">
              {post.frontmatter.title}
            </Heading>
        </Box>

        <Box pad={{vertical:"large"}} margin={{horizontal:'8vw'}}>
          <Tag tags={tags}></Tag>
          <Heading level="4">
            By: {post.frontmatter.author}<br/>
            {dateFormat(new Date(post.frontmatter.date),"mmmm d, yyyy")}
          </Heading>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </Box>

      </Mobile>

    </Layout>
  );
}

export const postQuery = graphql`
         query BlogPostByPath($slug: String!) {
           markdownRemark(fields: { slug: { eq: $slug } }) {
             frontmatter {
               featuredImage {
                 childImageSharp {
                   fluid(maxWidth: 1500) {
                     src
                   }
                 }
               }
               date
               clientName
               author
               title
               tags
             }
             html
           }
         }
       `;
