import React, {Fragment, useState} from 'react';
import {useMediaQuery} from 'react-responsive';


import {Grommet, Box, Text, Menu, AccordionPanel} from 'grommet';
import {grommet} from 'grommet/themes';
import {Article, Contact, ContactInfo, Services, FormDown} from 'grommet-icons';
import Link from 'gatsby-link';
import SearchBar from './SearchBar';
import PlainButton from './plainbutton';
import {Desktop, Mobile} from './menu';



const customLabel = () => (
  <Box direction="row" align="center" pad="medium" gap="none" style={{backgroundColor:'black'}}>
      <Text color ='white' size="1.25em">Menu</Text>
  </Box>
);
const CustomAccordionTheme = {
  textInput: {
    suggestions: {
      extend: {
        backgroundColor: "black",
        dropShadow: 'none'
      },
    },
  },
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
            style={{backgroundColor:'black', padding:'0'}}
          >

            <Box
              flex={{grow: 1, shrink: 2}}
              style={{whiteSpace: 'nowrap', backgroundColor:'black'}}
              direction="column"
              align="center"
              justify="evenly"
              display='inline-block'
            >
              <PlainButton
                color = 'white'
                hoverColor="red"
                fillColor="none"
                size="1.25em"
                display="inline-block"
                border={false}
                text="Stories"
                target="/"

              />
              <PlainButton
                color = 'white'
                hoverColor="red"
                fillColor="none"
                size="1.25em"
                display="inline-block"
                border={false}
                text="About"
                target="/about"
              />
              <PlainButton
                color = 'white'
                hoverColor="red"
                fillColor="none"
                size="1.25em"
                display="inline-block"
                border={false}
                text="Contact"
                target="/contact"
              />
            </Box>

            <Box style={{backgroundColor:"black", color:"white"}}
            >
                 
              <SearchBar ></SearchBar>
            </Box>

          </AccordionPanel>
        </Fragment>
      </Mobile>
    </Box>
  </Grommet>
);


export default Dropdown;
export {Mobile, Desktop};
