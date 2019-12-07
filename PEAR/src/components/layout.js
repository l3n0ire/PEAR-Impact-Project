import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql, Link} from 'gatsby';
import {Grid, Box, Grommet, Text, Accordion, AccordionPanel, Button} from 'grommet';

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
      <Accordion>
        <div style={{height: '100vh', width: '100vw'}}>
          <Grid
            rows={['xsmall', 'flex', '10vh', '20vh']}
            columns={['full']}
            justifyContent="center"
            areas={[
              {name: 'header', start: [0, 0], end: [0, 0]},
              {name: 'content', start: [0, 1], end: [0, 1]},
              {name: 'footer', start: [0, 3], end: [0, 3]},
            ]}
          >
            <Menu gridarea="header" />
            <main gridarea="content">
              <Dropdown></Dropdown>

              {children}
            </main>

            <Box gridarea="footer" align="center">
              <Text size="small">
                © {new Date().getFullYear()}, Colin Lin, Daniel Chua, and Jesse
                Maltese
              </Text>
              <Box direction="row" gap="medium" pad="small">
                <a href="https://www.facebook.com/azhar.laher" target="_blank">
                  <FacebookOption />
                </a>

                <a
                  href="https://www.instagram.com/azhar_laher/?hl=en"
                  target="_blank"
                >
                  <Instagram />
                </a>

                <a
                  href="https://twitter.com/azharlaher?lang=en"
                  target="_blank"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/azhar-laher-877b844/?originalSubdomain=ca"
                  target="_blank"
                >
                  <LinkedinOption />
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
