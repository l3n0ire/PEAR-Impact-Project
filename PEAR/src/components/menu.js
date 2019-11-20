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
              <Heading
                margin="none"
                style={{
                  lineHeight: "4vh",
                  padding: "none",
                  fontSize: "3.5vh",
                }}
              >
                Success Stories
              </Heading>
              <Heading
                margin="none"
                style={{
                  lineHeight: "4vh",
                  padding: "none",
                  fontSize: "3.5vh",
                }}
              >
                of <span style = {{color: 'red'}}>New Canadians</span>
              </Heading>
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
          <Heading
            margin="none"
            style={{
              lineHeight: "4vh",
              padding: "none",
              fontSize: "3.5vh",
            }}
          >
            Success Stories
          </Heading>
          <Heading
            margin="none"
            style={{
              lineHeight: "4vh",
              padding: "none",
              fontSize: "3.5vh",
            }}
          >
            of <span style = {{color: 'red'}}>New Canadians</span>
          </Heading>
        </Box>
      </Link>
      <Dropdown alignSelf = 'end'></Dropdown>
    </Mobile>
  </Box>
)

export default Menu;
export { Mobile, Desktop };
