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
        items={[
          {
            label: (
              <Box alignSelf="center">
                {" "}
                <Link to="/">
                   <Text>Stories</Text>
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
                   <Text>About</Text>
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
                   <Text>Contact</Text>
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
        <Box align="end" alignContent="center" direction="row">
          <FormDown size="3vw"   />
          <Text size="2.8vw"> Menu</Text>
        </Box>
      </Menu>
    </Box>
  </Grommet>
)

export default Dropdown;
