import React, { Fragment } from 'react'
import { useState } from 'react'
import Link from 'gatsby-link'
import { Box, Button, Heading } from 'grommet'
import { useMediaQuery } from "react-responsive"
import Dropdown from './dropdown'
import PlainButton from './plainbutton'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isTablet = useMediaQuery({maxWidth: 767 })
  return isTablet ? children : null
}

const Menu = () => (
  
  <Box
    justify="evenly"
    flex={true}
    fill="horizontal"
    align="center"
    direction="row"
    pad="medium"
    elevation="xsmall"
    background={{
      color: "light-1", 
    }}
  >
    <Desktop>
      <Fragment>
        <Link to="/">
          <Heading margin="none" size="medium">
            Azhar
          </Heading>
        </Link>

        <PlainButton size = 'xlarge' border = {false} text = 'Stories' target = '/'/>
        <PlainButton size = 'xlarge' border = {false} text = 'About' target = '/about'/>
        <PlainButton size = 'xlarge' border = {false} text = 'Contact' target = '/contact'/>
        
      </Fragment>
    </Desktop>
    <Mobile>
      <Link to="/">
        <Heading margin="none" size="medium">
          Azhar
        </Heading>
      </Link>
      <Dropdown />
    </Mobile>
  </Box>
)

export default Menu;
export { Mobile, Desktop };
