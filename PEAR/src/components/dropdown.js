import React from "react";

import { Grommet, Box, Text, Menu } from "grommet";
import { grommet } from "grommet/themes";
import { Apps, Contact, Blog, Services, FormDown} from "grommet-icons";
import Link from 'gatsby-link';

const Dropdown = () => (
    <Grommet theme={grommet}>
      <Box align="center" pad="medium" background ={{color: 'light-1'}}>
        <Menu
          plain
          items={[
            {
              label: <Box alignSelf = "center" width = '100vw'> <Link to='/about'>About</Link></Box>,
              icon: (
                <Link to='/about'>
                  <Box pad="medium">
                    <Contact />
                  </Box>
                </Link>
 
              )
              
            },
            {
              label: <Box alignSelf="center"><Link to='/contact'>Contact</Link></Box>,
              icon: (
                <Link to='/contact'>
                  <Box pad="medium">
                    <Services />
                  </Box>
                </Link>
              )
            },
            {
              label: <Box alignSelf="center"><Link to='/blog'>Blog</Link></Box>,
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
          <Box align = "end" direction="row" gap="small" pad="medium">
            <FormDown/>
            <Text> Menu</Text>
          </Box>
        </Menu>
      </Box>
    </Grommet>
  );
  
export default Dropdown;