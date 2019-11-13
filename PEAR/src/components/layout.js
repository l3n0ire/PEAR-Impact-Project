import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Box, Grommet } from "grommet"

import Menu from "./menu"
import "./layout.css"

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
    <>
    <div style = {{height: '100vh', width: '100vw'}}>
      <Grid
        rows = {['15vh', '65vh', '10vh', '20vh']}
        columns = {['full']}
        areas = {[
          { name: 'header', start: [0, 0], end: [0, 0] },
          { name: 'content', start: [0, 1], end: [0, 1] },
          { name: 'footer', start: [0, 3], end: [0, 3] }

        ]}
      > 
        <Menu gridArea = 'header'/>
        <main gridArea = 'content'>{children}</main>
        <Box gridArea = 'footer' align = 'center'>
          © {new Date().getFullYear()}, Colin Lin and Daniel Chua
        </Box>
      </Grid>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
