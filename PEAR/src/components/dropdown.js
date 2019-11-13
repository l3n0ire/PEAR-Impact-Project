import React from "react";

import { Grommet, Box, Text, Menu } from "grommet";
import { grommet } from "grommet/themes";
import { Apps, Github, Slack} from "grommet-icons";
import Link from 'gatsby-link';

const Dropdown = () => (
    <Grommet theme={grommet}>
      <Box align="center" pad="medium" background ={{color: 'light-1'}}>
        <Menu
          plain
          items={[
            {
              label: <Box alignSelf="center"><Link to='/about'>About</Link></Box>,
              
            },
            {
              label: <Box alignSelf="center"><Link to='/services'>Services</Link></Box>,
              
            },
            {
              label: <Box alignSelf="center"><Link to='/blog'>Blog</Link></Box>,
              
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