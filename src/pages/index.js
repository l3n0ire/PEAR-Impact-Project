import React, {Fragment} from 'react';

import Layout from '../components/layout';
import {
  Grid,
  Box,
  TextInput,
  Text,
  Heading,
  Image,
  Grommet,
  Button,
} from 'grommet';
import Link from 'gatsby-link';
import {Desktop, Mobile, Tablet} from '../components/menu';
import {graphql} from 'gatsby';
import PlainButton from '../components/plainButton';
import Img from "gatsby-image"
import Tag from '../components/tag';
import { Helmet } from 'react-helmet'
const dateFormat = require('dateformat');
const countryList = require('country-list')



const BlogPage = ({ data }) => (
  <Box>
    <Helmet>
      <meta
        charSet='utf-8'
        name='description'
        content='Collection of stories'
      />
    </Helmet>
    <Desktop>
      <Fragment>
        <Layout>
          <Box
            margin={{ horizontal: '8vw', vertical: 'medium' }}
            height='85vh'
            border={{ color: '#d3d3d3', opacity: '100', side: 'bottom' }}
            style={{ backgroundColor: 'white' }}
            pad={{ bottom: 'medium' }}
          >
            <Img
              style={{ padding: '0px', margin: '0px' }}
              fit='cover'
              fluid={data.allFile.edges[0].node.childImageSharp.sizes.src}
              sizes={data.allFile.edges[0].node.childImageSharp.sizes}
              aria-label='Homepage'
              alt='story image'
            />
            <Heading
              margin={{ top: 'medium', horizontal: 'medium', bottom: 'small' }}
              level='2'
            >
              Success Stories of New Canadians
            </Heading>
            <Text
              size='medium'
              margin={{ horizontal: 'medium', bottom: 'medium' }}
            >
              is a website created by Azhar Laher which features the stories of
              Canadian immigrants. If you are a new immigrant yourself and wish
              to share your story, click the button below or contact Azhar. We
              hope these stories will inspire our readers and help immigrants
              adapt to their new lives in Canada.
            </Text>

            <PlainButton
              text='Share Your Story'
              target='/contact'
              boxMargin='0'
            />
          </Box>
          <Heading margin={{ horizontal: '8vw', vertical: 'large' }} level='1'>
            Latest Posts
          </Heading>

          <Grid
            alignSelf='center'
            columns={['flex', 'flex', 'flex']}
            rows='flex'
            alignContent='center'
            gap='small'
            align='stretch'
            margin={{ vertical: '3vw', horizontal: '8vw' }}
          >
            {data.allMarkdownRemark.edges.map(post => (
              <Link to={post.node.fields.slug}>
                <Box
                  justify='center'
                  height='27vw'
                  border={{ color: '#d3d3d3', opacity: '100' }}
                  style={{ backgroundColor: 'white' }}
                >
                  <Img
                    style={{ padding: '0px', margin: '0px' }}
                    fit='cover'
                    fluid={
                      post.node.frontmatter.featuredImage.childImageSharp.sizes
                        .src
                    }
                    sizes={
                      post.node.frontmatter.featuredImage.childImageSharp.sizes
                    }
                    aria-label='Story image'
                    alt='story image'
                  />
                  {/* 
                This is for country images. Can't position it properly yet.
                <Image
                    style={{
                      "height": '5vh', 
                      "width": '7vw',
                      "top": "5px",
                      "zIndex": "3"
                    }}
                    fit='contain'
                    position='absolute'
                    a11yTitle={countryList.getName(
                      post.node.frontmatter.countryCode
                    )}
                    src={
                      '../images/flags/' +
                      post.node.frontmatter.countryCode +
                      '.png'
                    }
                    /> */}
                  <Heading
                    margin={{
                      top: 'xsmall',
                      right: 'medium',
                      left: 'medium',
                      bottom: 'xsmall'
                    }}
                    level='3'
                  >
                    {post.node.frontmatter.title}
                  </Heading>
                  <Text
                    size='medium'
                    margin={{ horizontal: 'medium', bottom: 'small' }}
                  >
                    By: {post.node.frontmatter.author}
                    <br />
                    {dateFormat(
                      new Date(post.node.frontmatter.date),
                      'mmmm d, yyyy'
                    )}
                  </Text>
                  <Box
                    direction='row'
                    margin={{ left: 'medium' }}
                    pad={{ bottom: '0' }}
                  >
                    <Tag tags={post.node.frontmatter.tags}></Tag>
                  </Box>
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
          margin={{ vertical: '3vw', horizontal: '20vw' }}
          height='70vw'
          border={{ color: '#d3d3d3', opacity: '100' }}
          style={{ backgroundColor: 'white' }}
          pad={{ bottom: 'medium' }}
        >
          <Img
            style={{ padding: '0px', margin: '0px' }}
            fit='cover'
            fluid={data.allFile.edges[0].node.childImageSharp.sizes.src}
            sizes={data.allFile.edges[0].node.childImageSharp.sizes}
            aria-label='Homepage'
            alt='story image'
          />

          <Heading
            margin={{
              top: 'medium',
              right: '3vw',
              left: '3vw',
              bottom: 'small'
            }}
            level='2'
          >
            Success Stories of New Canadians
          </Heading>
          <Text size='medium' margin={{ horizontal: '3vw', bottom: 'medium' }}>
            is a website created by Azhar Laher which features the stories of
            Canadian immigrants. If you are a new immigrant yourself and wish to
            share your story, click the button below or contact Azhar. We hope
            these stories will inspire our readers and help immigrants adapt to
            their new lives in Canada.
          </Text>

          <PlainButton
            text='Share Your Story'
            target='/contact'
            boxMargin='0'
          />
        </Box>
        <Heading margin={{ horizontal: '20vw', vertical: 'large' }} level='1'>
          Latest Posts
        </Heading>
        {data.allMarkdownRemark.edges.map(post => (
          <Link to={post.node.fields.slug}>
            <Box
              justify='center'
              margin={{ horizontal: '20vw', vertical: '5vh' }}
              height='50vw'
              style={{ backgroundColor: 'white' }}
              border={{ color: '#d3d3d3', opacity: '100' }}
              pad={{ bottom: 'xsmall' }}
            >
              <Img
                style={{ padding: '0px', margin: '0px' }}
                fit='cover'
                fluid={
                  post.node.frontmatter.featuredImage.childImageSharp.sizes.src
                }
                sizes={
                  post.node.frontmatter.featuredImage.childImageSharp.sizes
                }
                aria-label='Story image'
                alt='story image'
              />
              <Heading
                level='2'
                margin={{
                  top: 'small',
                  right: '3vw',
                  left: '3vw',
                  bottom: 'small'
                }}
              >
                {post.node.frontmatter.title}
              </Heading>
              <Text margin={{ horizontal: '3vw', bottom: 'small' }}>
                By: {post.node.frontmatter.author}
                <br />
                {dateFormat(
                  new Date(post.node.frontmatter.date),
                  'mmmm d, yyyy'
                )}
              </Text>

              <Box margin={{ left: '3vw' }}>
                <Tag tags={post.node.frontmatter.tags}></Tag>
              </Box>
            </Box>
          </Link>
        ))}
      </Layout>
    </Tablet>

    <Mobile>
      <Layout>
        <Box
          margin={{ vertical: '3vw', horizontal: '8vw' }}
          height='28em'
          border={{ color: '#d3d3d3', opacity: '100' }}
          style={{ backgroundColor: 'white' }}
          pad={{ bottom: 'medium' }}
        >
          <Img
            style={{ padding: '0px', margin: '0px' }}
            fit='cover'
            fluid={data.allFile.edges[0].node.childImageSharp.sizes.src}
            sizes={data.allFile.edges[0].node.childImageSharp.sizes}
            aria-label='Homepage'
            alt='story image'
          />

          <Heading
            margin={{
              top: 'small',
              right: '3vw',
              left: '3vw',
              bottom: 'small'
            }}
            level='2'
          >
            Success Stories of New Canadians
          </Heading>
          <Text size='small' margin={{ horizontal: '3vw', bottom: 'small' }}>
            is a website created by Azhar Laher which features the stories of
            Canadian immigrants. If you are a new immigrant yourself and wish to
            share your story, click the button below or contact Azhar. We hope
            these stories will inspire our readers and help immigrants adapt to
            their new lives in Canada.
          </Text>

          <PlainButton
            text='Share Your Story'
            target='/contact'
            boxMargin='0'
          />
        </Box>

        <Heading margin={{ horizontal: '8vw', vertical: 'large' }} level='1'>
          Latest Posts
        </Heading>
        {data.allMarkdownRemark.edges.map(post => (
          <Link to={post.node.fields.slug}>
            <Box
              justify='center'
              margin={{ vertical: 'large', horizontal: '8vw' }}
              height='medium'
              pad={{ bottom: 'medium' }}
              style={{ backgroundColor: 'white' }}
              border={{ color: '#d3d3d3', opacity: '100' }}
            >
              <Img
                style={{ padding: '0px', margin: '0px' }}
                fit='cover'
                fluid={
                  post.node.frontmatter.featuredImage.childImageSharp.sizes.src
                }
                sizes={
                  post.node.frontmatter.featuredImage.childImageSharp.sizes
                }
                aria-label='Story image'
                alt='story image'
              />
              <Heading
                level='2'
                margin={{
                  top: 'medium',
                  right: 'medium',
                  left: 'medium',
                  bottom: '0'
                }}
              >
                {post.node.frontmatter.title}
              </Heading>
              <Text margin='small'>
                {' '}
                By: {post.node.frontmatter.author} <br />
                {dateFormat(
                  new Date(post.node.frontmatter.date),
                  'mmmm d, yyyy'
                )}
              </Text>

              <Box margin={{ left: '3vw' }}>
                <Tag tags={post.node.frontmatter.tags}></Tag>
              </Box>
            </Box>
          </Link>
        ))}
      </Layout>
    </Mobile>
  </Box>
);

export const pageQuery = graphql`
         query MainPageQuery {
           allFile(
             filter: {
               childImageSharp: { sizes: { originalName: { eq: "home.jpg" } } }
             }
           ) {
             edges {
               node {
                 childImageSharp {
                   sizes(quality: 85) {
                     ...GatsbyImageSharpSizes_withWebp
                   }
                 }
               }
             }
           }
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
                   countryCode
                   featuredImage {
                     childImageSharp {
                       sizes(maxWidth: 800, quality: 50) {
                         ...GatsbyImageSharpSizes_withWebp
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
