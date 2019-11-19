import React from "react";

import { Grommet, Box, Text, Menu } from "grommet";
import { grommet } from "grommet/themes";
import { Article, Contact, ContactInfo, Services, FormDown} from "grommet-icons";
import Link from 'gatsby-link';

const Dropdown = () => (
  <Grommet>
    <Box
      alignContent="end"
      pad="medium"
      pad={{ right: "small" }}
      background={{ color: "#CC002C" }}
    >
      <Menu
        dropBackground="#CC002C"
        color="white"
        style={{
          global: {
            colors: {
              control: "white",
            },
          },
          menu: {
            extend: {
              color: "white",
            },
          },
        }}
        plain
        items={[
          {
            label: (
              <Box alignSelf="center">
                {" "}
                  <Link to="/">
                    <Text font='Lora' color="white">Stories</Text>
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
        <Box align="end" direction="row" gap="small" pad="medium">
          <FormDown />
          <Text>Menu</Text>
        </Box>
      </Menu>
    </Box>
  </Grommet>
)
  
export default Dropdown;