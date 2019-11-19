import React from "react";

import { Grommet, Box, Text, Menu } from "grommet";
import { grommet } from "grommet/themes";
import { Article, Contact, ContactInfo, Services, FormDown} from "grommet-icons";
import Link from 'gatsby-link';

const Dropdown = () => (
  <Grommet theme={grommet}>
    <Box
      alignContent="end"
      pad="medium"
      pad={{ right: "small" }}
      background={{ color: "light-1" }}
    >
      <Menu
        plain
        items={[
          {
            label: (
              <Box alignSelf="center">
                {" "}
                <Link to="/">Stories</Link>
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
                <Link to="/about">About</Link>
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
                <Link to="/contact">Contact</Link>
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
        <Box align="end" direction="row" gap="small" pad="medium">
          <FormDown />
          <Text> Menu</Text>
        </Box>
      </Menu>
    </Box>
  </Grommet>
)
  
export default Dropdown;