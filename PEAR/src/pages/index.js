import React, {Fragment} from 'react';

import Layout from '../components/layout';
import {Grid, Box, TextInput, Text, Heading, Image, Grommet,Button  } from 'grommet';
import Link from 'gatsby-link';
import {Desktop, Mobile, Tablet} from '../components/menu';
import {graphql} from 'gatsby';
import PlainButton from '../components/plainbutton';
var dateFormat = require('dateformat');


const BlogPage = ({ data }) => (

  <Box>
    <Desktop>
      <Fragment>
        <Layout>
          
            <Box 
              margin={{vertical:"3vw", horizontal:'8vw'}}
              height="80vh" border={{color: '#d3d3d3', opacity: '100'}}
              style={{backgroundColor:"white"}}
              pad={{bottom:'medium'}}
            
                        >
              <Image
                    style={{ padding: "0px", margin: "0px" }}
                    fit="cover"
                    src='../images/home.jpg'
                    
                  />

                <Heading
                      margin={{top:"medium", right:"medium", left:"medium", bottom:"small"}}
                      level="2"
                    >
                                    Success Stories of New Canadians

                    
                </Heading>
              <Text size="medium" margin={{horizontal:"medium", bottom:"medium"}}>
                is a website created by Azhar Laher which features the stories of Canadian immigrants.
                If you are a new immigrant yourself and wish to share your story, click the button below
                or contact Azhar. We hope these stories will inspire our readers and help immigrants
                adapt to their new lives in Canada.
              </Text>

              <PlainButton text="Share Your Story"  target="/" boxMargin="0"/>



            </Box>

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
                 style={{backgroundColor:"white"}} pad={{bottom:'medium'}} >
                  <Image
                    style={{ padding: "0px", margin: "0px" }}
                    fit="cover"
                    src={
                      post.node.frontmatter.featuredImage.childImageSharp.fluid
                        .src
                    }
                  />
                    <Heading
                      margin={{top:"medium", right:"medium", left:"medium", bottom:"small"}}
                      level="3"
                    >
                      {post.node.frontmatter.title}
                    </Heading>
                    <Text size="medium" margin={{horizontal:"medium"}}>
                    By: {post.node.frontmatter.author}<br/>
                    {dateFormat(new Date(post.node.frontmatter.date),"mmmm d, yyyy")}
                    </Text>
                    {post.node.frontmatter.tags.length > 0 ? (
            <Grommet theme={{global: {hover: {color: 'dark-1'}}}}>
              <Box
                direction="row"
                alignContent="center"
                pad={{top:"medium"}}
                margin={{horizontal:"medium"}}
              >
            
                {post.node.frontmatter.tags.slice(0, 10).map((tag) => (
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


                </Box>
              </Link>
            ))}
          </Grid>
        </Layout>
      </Fragment>
    </Desktop>

    <Tablet>
      <Layout>

      <Box 
              margin={{vertical:"3vw", horizontal:'20vw'}}
              height="70vw" border={{color: '#d3d3d3', opacity: '100'}}
              style={{backgroundColor:"white"}}
              pad={{bottom:'medium'}}
            
                        >
              <Image
                    style={{ padding: "0px", margin: "0px" }}
                    fit="cover"
                    src='../images/home.jpg'
                    
                  />

                <Heading
                      margin={{top:"medium", right:"3vw", left:"3vw", bottom:"small"}}
                      level="2"
                    >
                                    Success Stories of New Canadians

                    
                </Heading>
              <Text size="medium" margin={{horizontal:"3vw", bottom:"medium"}}>
                is a website created by Azhar Laher which features the stories of Canadian immigrants.
                If you are a new immigrant yourself and wish to share your story, click the button below
                or contact Azhar. We hope these stories will inspire our readers and help immigrants
                adapt to their new lives in Canada.
              </Text>

              <PlainButton text="Share Your Story"  target="/" boxMargin="0"/>



            </Box>
        {data.allMarkdownRemark.edges.map(post => (
          <Link to={post.node.fields.slug}>
            <Box justify="center" margin={{horizontal:"20vw",vertical:"5vh"}} height="50vw"
            style={{backgroundColor:"white"}} border={{color: '#d3d3d3', opacity: '100'}}
            pad={{bottom:'medium'}}
            
            >
              <Image
                style={{ margin: "0px" }}
                fit="cover"
                src={
                  post.node.frontmatter.featuredImage.childImageSharp.fluid.src
                }
              />
              <Heading level="2" margin={{top:"medium", right:"3vw", left:"3vw", bottom:"0"}}>
                
                {post.node.frontmatter.title}
              </Heading>
              <Text margin={{horizontal:"3vw"}}>
                By: {post.node.frontmatter.author}<br/>
                {dateFormat(new Date(post.node.frontmatter.date),"mmmm d, yyyy")}
              </Text>
            </Box>
          </Link>
        ))}
      </Layout>
    </Tablet>

    <Mobile>
      <Layout>

      <Box 
              margin={{vertical:"3vw", horizontal:'8vw'}}
              height="120vw" border={{color: '#d3d3d3', opacity: '100'}}
              style={{backgroundColor:"white"}}
              pad={{bottom:'medium'}}
            
                        >
              <Image
                    style={{ padding: "0px", margin: "0px" }}
                    fit="cover"
                    src='../images/home.jpg'
                    
                  />

                <Heading
                      margin={{top:"small", right:"3vw", left:"3vw", bottom:"small"}}
                      level="2"
                    >
                                    Success Stories of New Canadians

                    
                </Heading>
              <Text size="small" margin={{horizontal:"3vw", bottom:"small"}}>
                is a website created by Azhar Laher which features the stories of Canadian immigrants.
                If you are a new immigrant yourself and wish to share your story, click the button below
                or contact Azhar. We hope these stories will inspire our readers and help immigrants
                adapt to their new lives in Canada.
              </Text>

              <PlainButton text="Share Your Story"  target="/" boxMargin="0" />



            </Box>
        {data.allMarkdownRemark.edges.map(post => (
          <Link to={post.node.fields.slug}>
            <Box justify="center" margin={{vertical:"3vw", horizontal:'8vw'}}
                 height="medium"
                 pad={{bottom:'medium'}}
                 style={{backgroundColor:"white"}}
                 border={{color: '#d3d3d3', opacity: '100'}} >
              <Image
                style={{ margin: "0px" }}
                fit="cover"
                src={
                  post.node.frontmatter.featuredImage.childImageSharp.fluid.src
                }
              />
              <Heading  level="2" margin={{top:"medium", right:"medium", left:"medium", bottom:"0"}}>
                
                {post.node.frontmatter.title}
              </Heading>
              <Text margin='small'>
                {" "}
                
                By: {post.node.frontmatter.author} <br/>
                {dateFormat(new Date(post.node.frontmatter.date),"mmmm d, yyyy")}
              </Text>
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
