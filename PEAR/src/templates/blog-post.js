import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {Box, Heading, Grommet, Button, Image} from 'grommet';
import {Mobile, Desktop, Tablet} from '../components/menu';

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
         >
           
          <Heading color="white" alignSelf="center" 
            margin="auto" 
           
          >{post.frontmatter.title}</Heading>
          

        

        </Box>
      <Box pad={{vertical:"large"}} margin={{horizontal:'8vw'}} align="center"
>
  
        <div style={{ margin:"0px, auto", width:"50vw", minWidth:"700px"}}>

        {tags.length > 0 ? (
            <Grommet theme={{global: {hover: {color: 'dark-1'}}}}>
              <Box
                direction="row"
                alignContent="center"
                pad={{bottom:"medium"}}
              >
            
                {tags.slice(0, 10).map((tag) => (
                  <React.Fragment>
                    <Box
                      direction="row"
                      style={{borderRadius: '5px',
                      margin:"0 1vh 0 0 "
                    }}
                      background="light-2"
                    >
                      <Button
                        style={{
                          borderRadius: '5px',
                          padding: '1vh',
                          transition: '0.25s',
                        }}
                        color="black"
                        hoverIndicator="light-4"
                        plain
                        href={'/search?q=' + tag}
                        label={tag}
                      />
                    </Box>
                  </React.Fragment>
                ))}
              </Box>
            </Grommet>
          ) : null}

        <Heading level="4">
        By: {post.frontmatter.author}<br/>
                    {dateFormat(new Date(post.frontmatter.date),"mmmm d, yyyy")}
        </Heading>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
      </Box>
        
      </Desktop>
      <Mobile>
      <Box pad={{vertical:"large"}} margin={{horizontal:'8vw'}}
>
        <Heading>{post.frontmatter.title}</Heading>
        <Heading level="4">
            Posted by: {post.frontmatter.author} on {post.frontmatter.date}
        </Heading>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </Box>
      </Mobile>
      <Tablet>
      <Box pad={{vertical:"large"}} margin={{horizontal:'8vw'}}
>
        <Heading>{post.frontmatter.title}</Heading>
        <Heading level="4">
            Posted by: {post.frontmatter.author} on {post.frontmatter.date}
        </Heading>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </Box>
        
      </Tablet>


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
