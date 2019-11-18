import React from 'react'
import { Button, Box, Grommet, Text} from 'grommet'
import Link from 'gatsby-link'
import globalTheme from './style'

const PlainButton = ({ text, target, border = true, size = 'medium'}) => (

  <Box alignSelf="center">
    <Grommet theme={globalTheme}>
      <Box
        alignSelf="center"
        margin="small"
        overflow="hidden"
        width={{ min: "80px", max: "150px" }}
        border={ border ?  { side: "all", color: "black" } : { color: 'none' }}
      >
        <Link to={target}>
          <Button
            alignSelf="center"
            label={<Text size={size}>{text}</Text>}
            plain={true}
            style={{
              padding: "10px",
              textAlign: "center",
              transition: "0.3s",
              fontSize: {size}
            }}
            hoverIndicator="black"
            fill={true}
          />
        </Link>
      </Box>
    </Grommet>
  </Box>
)

export default PlainButton 