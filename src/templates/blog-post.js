import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {Box, Heading, Grommet, Button, Image, Text} from 'grommet';
import {Mobile, Desktop, Tablet} from '../components/menu';
import Tag from '../components/tag';
import Header from '../components/header';


const dateFormat = require('dateformat');

export default function Template({data}) {
  const post = data.markdownRemark;
  const tags = post.frontmatter.tags;
  const imageUrl= 'url('+post.frontmatter.featuredImage.childImageSharp.fluid.src+')';
  let tagString='';
  tags.slice(0, 10).map((tag) => (
    tagString = tagString + tag +' '
  ));
  const author =[post.frontmatter.author];


  return (
    <Layout>
      <Desktop>

        <Box
          height ="60vh"
          background = {{opacity: 'weak', image: imageUrl}}
          pad="8vw"
        />

        <Box pad={{vertical: 'large'}} margin={{horizontal: '8vw'}} align="center">
          <div style={{margin: '0px, auto', width: '50vw', minWidth: '700px'}}
          >
            <Heading level="1"
            >
              {post.frontmatter.title}
            </Heading>
            <Tag tags={tags}></Tag>
            <br/>
            <Box direction ="row">
              <Text size="large" margin={{top: 'xxsmall', right: 'medium'}}>By: </Text>
              <Tag tags={author}></Tag>
            </Box>
            <br/>
            <Heading level="4">
              {dateFormat(new Date(post.frontmatter.date), 'mmmm d, yyyy')}
            </Heading>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <Heading margin={{top: 'xlarge'}} level="2">Recommended Posts</Heading>

            <Header current ={post.frontmatter.title} is_recommend = {true} query={tagString}></Header>

          </div>

        </Box>


      </Desktop>

      <Tablet>
        <Box
          height ="50vh"
          background = {'url('+post.frontmatter.featuredImage.childImageSharp.fluid.src+')'}
          pad="8vw"
        />


        <Box pad={{vertical: 'large'}} margin={{horizontal: '8vw'}}>
          <Heading level="1"
          >
            {post.frontmatter.title}
          </Heading>
          <Tag tags={tags}></Tag>
          <br/>
          <Box direction ="row">
            <Text size="large" margin={{top: 'xxsmall', right: 'medium'}}>By: </Text>
            <Tag tags={author}></Tag>
          </Box>
          <br/>
          <Heading level="4">

            {dateFormat(new Date(post.frontmatter.date), 'mmmm d, yyyy')}
          </Heading>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
          <Heading margin={{top: 'xlarge'}} level="2">Recommended Posts</Heading>

          <Header current ={post.frontmatter.title} is_recommend = {true} query={tagString}></Header>
        </Box>

      </Tablet>

      <Mobile>
        <Box
          height ="50vh"
          background = {'url('+post.frontmatter.featuredImage.childImageSharp.fluid.src+')'}
          pad="8vw"
        />


        <Box pad={{vertical: 'large'}} margin={{horizontal: '8vw'}}>
          <Heading level="1"
          >
            {post.frontmatter.title}
          </Heading>
          <Tag tags={tags}></Tag>
          <Box direction ="row">
            <Text size="large" margin={{top: 'xxsmall', right: 'medium'}}>By: </Text>
            <Tag tags={author}></Tag>
          </Box>
          <br/>
          <Heading level="4">
            {dateFormat(new Date(post.frontmatter.date), 'mmmm d, yyyy')}
          </Heading>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
          <Heading margin={{top: 'large'}} level="2">Recommended Posts</Heading>

          <Header current ={post.frontmatter.title} is_recommend = {true} query={tagString}></Header>
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
