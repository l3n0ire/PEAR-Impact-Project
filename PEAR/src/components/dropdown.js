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
              label: <Box alignSelf="center"> <Link to='/about'>About</Link></Box>,
              icon: (
                <Link to='/about'>
                  <Box pad="medium">
                    <Contact />
                  </Box>
                </Link>
 
              )
              
            },
            {
              label: <Box alignSelf="center"><Link to='/about'>Services</Link></Box>,
              icon: (
                <Link to='/services'>
                  <Box pad="medium">
                    <Services />
                  </Box>
                </Link>
              )
            },
            {
              label: <Box alignSelf="center"><Link to='/about'>Blog</Link></Box>,
              icon: (
                <Link to='/blog'>
                  <Box pad="medium">
                    <Blog />
                  </Box>
                </Link>
 
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