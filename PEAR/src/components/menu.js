import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import { Box, Button, Heading } from 'grommet'
import { useMediaQuery } from "react-responsive"
import Dropdown from './dropdown'

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
    background={{
      color: "light-1",
    }}
  >
    <Desktop>
      <Fragment>
        <Link to="/">
          <Heading margin="none" size="small">
            Azhar
          </Heading>
        </Link>

        <Link to="/about">
          <Button primary={false} label="About"></Button>
        </Link>

        <Link to="/services">
          <Button primary={false} label="Services"></Button>
        </Link>

        <Link to="/blog">
          <Button primary={false} label="Blog"></Button>
        </Link>
      </Fragment>
    </Desktop>
    <Mobile>
      <Link to="/">
        <Heading margin="none" size="small">
          Azhar
        </Heading>
      </Link>
      <Dropdown />
    </Mobile>
  </Box>
)

export default Menu;
