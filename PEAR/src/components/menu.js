import React, { Fragment } from 'react'
import { useState } from 'react'
import Link from 'gatsby-link'
import { Box, Button, Heading, Text} from 'grommet'
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
    height="xxsmall"
    background={{
      color: "#CC002C",
    }}
  >
    <Desktop>
      <Fragment>
        <Box width={{ min: "20%", max: "40%" }}>
          <Link to="/">
            <Box alignSelf="start" width="100%">
              <Heading
                margin="none"
                alignSelf="left"
                style={{
                  lineHeight: "3.5vh",
                  padding: "none",
                  fontSize: "2.3vw",
                  fontWeight: "400",
                  color: "white",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                }}
              >
                Success Stories of New Canadians
              </Heading>
            </Box>
          </Link>
        </Box>
        <Box
          width={{ min: "60%", max: "100%" }}
          fill="vertical"
          direction="row"
          align="center"
          pad="medium"
          justify="evenly"
          overflow="hidden"
        >
          <PlainButton
            textColor="white"
            hoverTextColor="white"
            fillColor="#BA0028"
            size="2.3vw"
            border={false}
            text="Stories"
            target="/"
          />

          <PlainButton
            textColor="white"
            hoverTextColor="white"
            fillColor="#BA0028"
            size="2.3vw"
            border={false}
            text="About"
            target="/about"
          />

          <PlainButton
            textColor="white"
            hoverTextColor="white"
            fillColor="#BA0028"
            size="2.3vw"
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
          background={{ color: "#CC002C" }}
        >
          <Heading
            margin="none"
            alignSelf="left"
            style={{
              lineHeight: "3.5vh",
              padding: "none",
              fontSize: "2.3vw",
              fontWeight: "400",
              color: "white",
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Success Stories of New Canadians
          </Heading>
        </Box>
      </Link>
      <Dropdown alignSelf="end"></Dropdown>
    </Mobile>
  </Box>
)

export default Menu;
export { Mobile, Desktop };
