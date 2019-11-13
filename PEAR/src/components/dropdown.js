import React from "react";

import { Grommet, Box, Text, Menu } from "grommet";
import { grommet } from "grommet/themes";
import { Apps, Contact, Blog, Services} from "grommet-icons";
import Link from 'gatsby-link';

const Dropdown = () => (
    <Grommet theme={grommet}>
      <Box align="center" pad="medium" background ={{color: 'light-1'}}>
        <Menu
          plain
          items={[
            {
              label: <Box alignSelf="center"><Link to='/about'>About</Link></Box>,
              icon: (
                <Box pad="medium">
                <Contact />
              </Box>
 
              )
              
            },
            {
              label: <Box alignSelf="center"><Link to='/services'>Services</Link></Box>,
              icon: (
                <Box pad="medium">
                <Services />
              </Box>
 
              )
            },
            {
              label: <Box alignSelf="center"><Link to='/blog'>Blog</Link></Box>,
              icon: (
                <Box pad="medium">
                <Blog />
              </Box>
 
              )
            },
          ]}
        >
          <Box direction="row" gap="small" pad="medium">
            <Apps />
          </Box>
        </Menu>
      </Box>
    </Grommet>
  );
  
export default Dropdown;