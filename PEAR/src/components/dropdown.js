import React from "react";

import { Grommet, Box, Text, Menu } from "grommet";
import { grommet } from "grommet/themes";
import { Article, Contact, ContactInfo, Services, FormDown} from "grommet-icons";
import Link from 'gatsby-link';

const Dropdown = () => (
  <Grommet theme={grommet}>
    <Box
      pad="medium"
      pad={{ right: "small" }}
      background={{ color: "light-1" }}
    >
      <Menu
        dropBackground="#CC002C"

        style={{
          global: {
            colors: {
              control: "white",
            },
          },
          menu: {
            extend: {
              color: "white"
            },
          },
          color: 'white'
        }}
        items={[
          {
            label: (
              <Box alignSelf="center">
                {" "}
                <Link to="/">
                  <Text color="white">
                    Stories
                  </Text>
                </Link>
              </Box>
            ),
            icon: (
              <Link to="/">
                <Box pad="medium">
                  <Article />
                </Box>
              </Link>
            ),
          },
          {
            label: (
              <Box alignSelf="center">
                <Link to="/about">
                  <Text color="white">About</Text>
                </Link>
              </Box>
            ),
            icon: (
              <Link to="/about">
                <Box pad="medium">
                  <ContactInfo />
                </Box>
              </Link>
            ),
          },
          {
            label: (
              <Box alignSelf="center">
                <Link to="/contact">
                  <Text color="white">Contact</Text>
                </Link>
              </Box>
            ),
            icon: (
              <Link to="/contact">
                <Box pad="medium">
                  <Contact />
                </Box>
              </Link>
            ),
          },
        ]}
      >
        <Box align="end" alignContent='center' direction="row">
          <FormDown size='3vw' color='white'/>
          <Text size='2.8vw'> Menu</Text>
        </Box>
      </Menu>
    </Grommet>
  </Box>
)

export default Dropdown;
