import React from 'react';
import {Button, Box, Grommet, Text} from 'grommet';
import Link from 'gatsby-link';
import globalTheme from './style';

const PlainButton = ({text, target, border = true, size = 'medium', fillColor = 'black', hoverColor, display = 'auto'}) => (
  <Box alignSelf="center">
    <Grommet theme={{
      global: {
        hover: {
          color: hoverColor == undefined ? 'white' : hoverColor,
        },
      },
    }}>
      <Box
        alignSelf="center"
        margin="small"
        overflow="hidden"
        display={display}
        width={{min: '80px', max: '300px'}}
        border={border ? {side: 'all', color: fillColor} : {color: 'none'}}
      >
        <Link to={target}>
          <Button
            alignSelf="center"
            label={<Text size={size}>{text}</Text>}
            plain={true}

            style={{
              padding: '10px',
              textAlign: 'center',
              transition: '0.35s',
              fontSize: {size},
              whiteSpace: 'nowrap',
              display: {display},
            }}
            hoverIndicator={fillColor}
            fill={true}

          />
        </Link>
      </Box>
    </Grommet>
  </Box>
);

export default PlainButton;
