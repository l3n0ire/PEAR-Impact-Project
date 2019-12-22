import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql, Link} from 'gatsby';
import {Grid, Box, Grommet, Text, Accordion, AccordionPanel, Button} from 'grommet';
import { Helmet } from 'react-helmet'
import Menu from './menu';
import './layout.css';
import globalTheme from './style';
import Dropdown from './dropdown';
import {FacebookOption, Instagram, Twitter, MailOption, LinkedinOption} from 'grommet-icons';


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
          icon: {
            hover: {
              size: '10vh',
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
            <Menu gridarea="header" />
            <main gridarea="content">
              <Dropdown></Dropdown>

              {children}
            </main>

            <Box className ="footer" gridarea="footer" align="center" pad={{'top':'large'}}>
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
