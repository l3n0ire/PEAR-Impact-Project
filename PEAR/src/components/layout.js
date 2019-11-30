import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql,Link } from "gatsby"
import { Grid, Box, Grommet, Text, Accordion, AccordionPanel} from "grommet"

import Menu from "./menu"
import "./layout.css"
import globalTheme from './style'
import SearchBar from './SearchBar'




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <Grommet theme={globalTheme}>
      <Accordion>
      <div style = {{height: '100vh', width: '100vw'}}>

        <Grid
          rows = {['15vh', 'flex', '10vh', '20vh']}
          columns = {['full']}
          justifyContent = 'center'
          areas = {[
            { name: 'header', start: [0, 0], end: [0, 0] },
            { name: 'content', start: [0, 1], end: [0, 1] },
            { name: 'footer', start: [0, 3], end: [0, 3] }

          ]}
        > 
          
            <Menu gridArea = 'header'/>
          <main gridArea = 'content'>
              <AccordionPanel label='click me (everything is in layout.js)'>

              <Box alignSelf="center">
                {" "}
                <Link to="/">
                   <Text>Stories</Text>
                </Link>
              </Box>

              <Box alignSelf="center">
                <Link to="/about">
                   <Text>About</Text>
                </Link>
              </Box>

              <Box alignSelf="center">
                <Link to="/contact">
                   <Text>Contact</Text>
                </Link>
              </Box>

              <Box flex={{ shrink: 2 }} margin={{ right: "medium" }}>
                <SearchBar></SearchBar>
              </Box>

              </AccordionPanel>
              {children}
          </main>
          
          <Box gridArea = 'footer' align = 'center'>
            <Text size='small'> 
              © {new Date().getFullYear()}, Colin Lin, Daniel Chua, and Jesse Maltese
            </Text>
          </Box>
          
        </Grid>

        </div>
        </Accordion>
    </Grommet>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
