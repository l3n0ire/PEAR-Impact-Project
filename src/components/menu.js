import React, {Fragment} from 'react';
import Link from 'gatsby-link';
import {Box, Heading} from 'grommet';
import {useMediaQuery} from 'react-responsive';
import Dropdown from './dropdown';
import PlainButton from './plainButton';
import SearchBar from './searchBar';


const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({minWidth: 1025});
  const isLandscape = useMediaQuery({query: '(orientation: landscape)'});
  return isLandscape && isDesktop ? children : null;
};
const Mobile = ({children}) => {
  const isMobile = useMediaQuery({maxWidth: 767});
  const isPortrait = useMediaQuery({query: '(orientation: portrait)'});
  return isMobile ? children : null;
};
const Tablet = ({children}) => {
  const isTablet = useMediaQuery({maxWidth: 1024, minWidth: 768});
  return isTablet ? children : null;
};

const Menu = () => (
  <Box
    style={{
      flexDirection: 'row',
    }}
    fill="horizontal"
    align="center"
    direction="row"
    height="xsmall"
    // elevation="xsmall"
    background={{
      color: 'black',
    }}
  >
    <Desktop>
      <Fragment>
        <Box
          display="inline-block"
          style={{
            whiteSpace: 'nowrap',
          }}
          flex={{grow: 2, shrink: 1}}
          width={{min: '225px', max: '10%'}}
          margin={{left: '8vw'}}

        >
          <Link to="/">
            <Box
              display="inline-block"
              flex={true}
              alignSelf="start"

            >
              <Heading
                margin="none"
                style={{
                  fontWeight: 400,
                  lineHeight: '4vh',
                  padding: 'none',
                  fontSize: '1.5em',

                }}
                color="white"
              >
                Success Stories
              </Heading>
              <Heading
                margin="none"
                style={{
                  fontWeight: 400,
                  lineHeight: '4vh',
                  padding: 'none',
                  fontSize: '1.5em',
                }}
                color="white"
              >
                of <span style={{color: 'red'}}>New Canadians</span>
              </Heading>
            </Box>
          </Link>
        </Box>
        <Box
          flex={{grow: 1, shrink: 2}}
          style={{whiteSpace: 'nowrap'}}
          direction="row"
          align="center"
          justify="around"
          display="inline-block"
          margin={{left: '0', right: '4vw'}}


        >
          <PlainButton
            hoverColor="red"
            fillColor="none"
            color="white"
            size="1.3em"
            display="inline-block"
            border={false}
            text="Stories"
            target="/"
            boxMargin="0"
          />
          <PlainButton
            hoverColor="red"
            fillColor="none"
            size="1.3em"
            color="white"
            display="inline-block"
            border={false}
            text="About"
            target="/about"
          />

          <PlainButton
            hoverColor="red"
            fillColor="none"
            size="1.3em"
            color="white"
            display="inline-block"
            border={false}
            text="Contact"
            target="/contact"
          />
          <SearchBar></SearchBar>
        </Box>

      </Fragment>
    </Desktop>

    <Mobile>
      <Link to="/">
        <Box
          margin="none"
          width={{min: '50%'}}
          margin={{horizontal: '8vw'}}

        >
          <Heading
            color="white"
            margin="none"
            style={{
              lineHeight: '4vh',
              padding: 'none',
              fontWeight: 400,
              fontSize: '1.25em',
            }}
          >
            Success Stories of <span style={{color: 'red', fontWeight: 'bold'}}>New Canadians</span>
          </Heading>

        </Box>
      </Link>
    </Mobile>

    <Tablet>
      <Link to="/">
        <Box
          margin="none"
          width={{min: '50%'}}
          margin={{horizontal: '8vw'}}

        >
          <Heading
            color="white"
            margin="none"
            style={{
              lineHeight: '4vh',
              padding: 'none',
              fontWeight: 400,
              fontSize: '1.5em',
            }}
          >
            Success Stories of <span style={{color: 'red', fontWeight: 'bold'}}>New Canadians</span>
          </Heading>

        </Box>
      </Link>
    </Tablet>
  </Box>
);

export default Menu;
export {Mobile, Desktop, Tablet};
