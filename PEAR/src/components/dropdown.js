import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive"


import { Grommet, Box, Text, Menu, AccordionPanel } from "grommet";
import { grommet } from "grommet/themes";
import { Article, Contact, ContactInfo, Services, FormDown} from "grommet-icons";
import Link from 'gatsby-link';
import SearchBar from './SearchBar'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isTablet = useMediaQuery({maxWidth: 767 })
  return isTablet ? children : null
}

const Dropdown = () => (
  <Box>

  <Desktop>
          <Fragment>
</Fragment>

  </Desktop>
  <Mobile>
    <Fragment>

  <AccordionPanel label='click me (pls style)'>

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
  </Fragment>
  </Mobile>
  </Box>
  
)

export default Dropdown;
export { Mobile, Desktop };
