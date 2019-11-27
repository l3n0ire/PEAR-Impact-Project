import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import { Box, Heading } from 'grommet'
import { useMediaQuery } from "react-responsive"
import Dropdown from './dropdown'
import PlainButton from './plainbutton'
import SearchBar from './SearchBar'

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
    style={{
      flexDirection: "row",
    }}
    fill="horizontal"
    align="center"
    direction="row"
    height="xsmall"
    elevation="xsmall"
    background={{
      color: "light-1",
    }}
  >
    <Desktop>
      <Fragment>
        <Box
          display="inline-block"
          style={{
            whiteSpace: 'nowrap'
          }}
          flex={{ grow: 2, shrink: 1 }}
          width={{ min: '225px' , max: "10%" }}
        >
          <Link to="/">
            <Box
              display="inline-block"
              flex={true}
              pad={{ left: "small" }}
              alignSelf="start"
            >
              <Heading
                margin="none"
                style={{
                  lineHeight: "4vh",
                  padding: "none",
                  fontSize: "3.2vh"
                }}
                color='black'
              >
                Success Stories
              </Heading>
              <Heading
                margin="none"
                style={{
                  lineHeight: "4vh",
                  padding: "none",
                  fontSize: "3.2vh",
                }}
                color='black'
              >
                of <span style={{ color: "red" }}>New Canadians</span>
              </Heading>
            </Box>
          </Link>
        </Box>
        <Box
          flex={{ grow: 1, shrink: 2 }}
          style={{whiteSpace: "nowrap"}}
          direction="row"
          align="center"
          justify="evenly"
          display='inline-block'
        >
          <PlainButton
            hoverColor="red"
            fillColor="none"
            size="2.3vw"
            display="inline-block"
            border={false}
            text="Stories"
            target="/"
          />
          <PlainButton
            hoverColor="red"
            fillColor="none"
            size="2.3vw"
            display="inline-block"
            border={false}
            text="About"
            target="/about"
          />

          <PlainButton
            hoverColor="red"
            fillColor="none"
            size="2.3vw"
            display="inline-block"
            border={false}
            text="Contact"
            target="/contact"
          />
        </Box>
        <Box flex={{ shrink: 2 }} margin={{ right: "medium" }}>
          <SearchBar></SearchBar>
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
            of <span style={{ color: "red" }}>New Canadians</span>
          </Heading>
        </Box>
      </Link>
      <Dropdown alignSelf="end"></Dropdown>
    </Mobile>
  </Box>
)

export default Menu;
export { Mobile, Desktop };
