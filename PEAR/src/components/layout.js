import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql, Link} from 'gatsby';
import {Grid, Box, Grommet, Text, Accordion, AccordionPanel, Button, Heading} from 'grommet';
import { Helmet } from 'react-helmet'
import Menu from './menu';
import './layout.css';
import globalTheme from './style';
import Dropdown from './dropdown';
import {FacebookOption, Instagram, Twitter, MailOption, LinkedinOption} from 'grommet-icons';
import PlainButton from "../components/plainbutton"


const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Grommet
      theme={{

        icon: {
          hover: {
            size: '10vh',
          },
        },
        global: {
          hover: {
            color: "red",
          },
          icon: {
            hover: {
              size: '10vh',
              background:{
                color:"black"
              }
            },
          },
        },
      }}
    >
      <Helmet>
        <meta charSet='utf-8'/>
        <title>Success Stories of New Canadians</title>
      </Helmet>
      <Accordion>
        <div style={{height: '100vh', width: '100vw'}}>
          <Grid
            rows={['xsmall', 'flex', 'medium']}
            columns={['full']}
            justifyContent="center"
            areas={[
              {name: 'header', start: [0, 0], end: [1, 0]},
              {name: 'content', start: [0, 1], end: [1, 1]},
              {name: 'footer', start: [0, 2], end: [2, 2]},
            ]}
          >
            <Menu gridarea="header"  />
            <main gridarea="content" style={{backgroundColor:"#fefefe"}}>
              <Dropdown></Dropdown>

              {children}
            </main>

            <Box className ="footer" gridarea="footer" pad={{'top':'large'}} 
            style={{display:"flex", flexDirection:"row"}}>
            <div style={{flex:"1"}}>
            <Heading
                margin="none"
                style={{
                  fontWeight: 400,
                  lineHeight: "4vh",
                  padding: "none",
                  fontSize: "1.5em",

                }}
                color="white"
              >
                Success Stories
              </Heading>
              <Heading
                margin="none"
                style={{
                  fontWeight: 400,
                  lineHeight: "4vh",
                  padding: "none",
                  fontSize: "1.5em",
                }}
                color="white"
              >
                of <span style={{ color: "red" }}>New Canadians</span>
              </Heading>
              
                <br></br>
              <Text size="medium">
                © {new Date().getFullYear()}, Colin Lin, Daniel Chua, and Jesse
                Maltese
              </Text>
              <Box direction="row" gap="medium" pad="small">
                <a href="https://www.facebook.com/azhar.laher" target="_blank">
                  <FacebookOption color="white" />
                </a>

                <a
                  href="https://www.instagram.com/azhar_laher/?hl=en"
                  target="_blank"
                >
                  <Instagram color="white" />
                </a>

                <a
                  href="https://twitter.com/azharlaher?lang=en"
                  target="_blank"
                >
                  <Twitter color="white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/azhar-laher-877b844/?originalSubdomain=ca"
                  target="_blank"
                >
                  <LinkedinOption  color="white"/>
                </a>
                
              </Box>
              </div>

              <div style={{flex:"1", color:"white"}} >
              


              <Box
              alignSelf="center"
              width="50%"
              margin={{left:'35%'}}

              
            >
              <Heading level='2' >Links</Heading>
              <Link style={{color:"white"}} to='/'>

              <Box width='15vw' pad={{bottom:"small"}}>
              <Button 
              label={<Text size="1.25em">Stories</Text>}
              plain={true}
              fill={true}
              hoverIndicator="black"
              alignSelf="center"
              width="10vw"
              />
              </Box>
              </Link>

              <Link style={{color:"white"}} to='/about'>

              <Box width='15vw' pad={{bottom:"small"}}>
              <Button 
              label={<Text size="1.25em">About</Text>}
              plain={true}
              fill={true}
              hoverIndicator="black"
              alignSelf="center"
              />
              </Box>
              </Link>

              <Link style={{color:"white"}} to='/contact'>

             <Box width='15vw'pad={{bottom:"small"}}>
              <Button 
              label={<Text size="1.25em">Contact</Text>}
              plain={true}
              fill={true}
              hoverIndicator="black"
              alignSelf="center"
              />
              </Box>
              </Link>

            </Box>

              </div>


              <div style={{flex:"1"}}>
                <Heading level ="3">Have a story you want to share?</Heading>

                <PlainButton color="white"
                text="Share Your Story" 
                hoverColor="black"
                fillColor="white"
                target="/" boxMargin="0"/>



              </div>
            </Box>
          </Grid>
        </div>
      </Accordion>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
