import React, {Fragment, useState} from 'react';
import {useMediaQuery} from 'react-responsive';


import {Grommet, Box, Text, Menu, AccordionPanel} from 'grommet';
import {grommet} from 'grommet/themes';
import {Article, Contact, ContactInfo, Services, FormDown} from 'grommet-icons';
import Link from 'gatsby-link';
import SearchBar from './SearchBar';
import PlainButton from './plainbutton';


const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({ minWidth: 1025});
  return isDesktop ? children : null;
};
const Mobile = ({children}) => {
  const isTablet = useMediaQuery({maxWidth: 1024});
  return isTablet ? children : null;
};
const customLabel = () => (
  <Box direction="row" align="center" pad="small" gap="none">
    <strong>
      <Text margin="1.5vw">Menu</Text>
    </strong>
  </Box>
);
const CustomAccordionTheme = {
  accordion: {
    heading: {level: '3'},
    icons: {
      color: 'red',
    },
    border: {
      color: 'white',
    },
  },
};


const Dropdown = () => (
  <Grommet theme={CustomAccordionTheme}>
    <Box>

      <Desktop>
        <Fragment>
        </Fragment>

      </Desktop>
      <Mobile>
        <Fragment>

          <AccordionPanel
            label ={customLabel()}
          >

            <Box
              flex={{grow: 1, shrink: 2}}
              style={{whiteSpace: 'nowrap'}}
              direction="column"
              align="center"
              justify="evenly"
              display='inline-block'
            >
              <PlainButton
                hoverColor="red"
                fillColor="none"
                size="1.25em"
                display="inline-block"
                border={false}
                text="Stories"
                target="/"

              />
              <PlainButton
                hoverColor="red"
                fillColor="none"
                size="1.25em"
                display="inline-block"
                border={false}
                text="About"
                target="/about"
              />
              <PlainButton
                hoverColor="red"
                fillColor="none"
                size="1.25em"
                display="inline-block"
                border={false}
                text="Contact"
                target="/contact"
              />
            </Box>

            <Box flex={{shrink: 2}} margin={{right: 'medium'}}>
              <SearchBar></SearchBar>
            </Box>

          </AccordionPanel>
        </Fragment>
      </Mobile>
    </Box>
  </Grommet>
);


export default Dropdown;
export {Mobile, Desktop};
