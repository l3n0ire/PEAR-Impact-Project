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

const titles = ["Success Stories", "of", "New Canadians"]

const Menu = () => (
  <Box
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
        <Box width={{min:"300px" , max:"20%"}}>
          <Link to="/">
            <Box alignSelf="start" width="100%">
              {titles.map(title =>
                <Heading
                  margin="none"
                  alignSelf = "center"
                  style={{
                    lineHeight: "4vh",
                    padding: "none",
                    fontSize: "3.5vh",
                  }}
                >
                  {title}
                </Heading>    
              )}
            </Box>
          </Link>
        </Box>
        <Box
          width="80%"
          direction="row"
          align="center"
          pad="large"
          justify="evenly"
        >
          <PlainButton
            hoverColor="red"
            fillColor="none"
            size="2.5vw"
            border={false}
            text="Stories"
            target="/"
          />

          <PlainButton
            hoverColor="red"
            fillColor="none"
            size="2.5vw"
            border={false}
            text="About"
            target="/about"
          />

          <PlainButton
            hoverColor="red"
            fillColor="none"
            size="2.5vw"
            border={false}
            text="Contact"
            target="/contact"
          />
        </Box>
      </Fragment>
    </Desktop>
    <Mobile>
      <Link to="/">
        <Box
          margin="none"
          width={{ min: "50%" }}
          style={{ lineHeight: "30px", padding: "none" }}
        >
          {titles.map(title =>
                <Heading
                  margin="none"
                  alignSelf = "center"
                  style={{
                    lineHeight: "4vh",
                    padding: "none",
                    fontSize: "3.5vh",
                  }}
                >
                  {title}
                </Heading>    
              )}
        </Box>
      </Link>
      <Dropdown/>
    </Mobile>
  </Box>
)

export default Menu;
export { Mobile, Desktop };
