import React from 'react'
import { Button, Box, Grommet, Text} from 'grommet'
import Link from 'gatsby-link'
import globalTheme from './style'

const PlainButton = ({
  text,
  target,
  border = true,
  size = "medium",
  fillColor = "#CC002C",
  hoverTextColor = "none",
  textColor = "black",
}) => (
  <Box alignSelf="center">
    {console.log(hoverTextColor)}
    <Grommet
      theme={{
        global: {
          hover: {
            color: hoverTextColor == undefined ? "white" : hoverTextColor,
          },
        },
      }}
    >
      <Box
        alignSelf="center"
        margin="small"
        overflow="hidden"
        fill="vertical"
        width={{ min: "80px", max: "300px" }}
        border={
          border
            ? { side: "all", color: fillColor, size: "small" }
            : { color: "none" }
        }
      >
        <Link to={target}>
          <Button
            alignSelf="center"
            label={<Text size={size}>{text}</Text>}
            plain={true}
            color={textColor}
            style={{
              padding: "10px",
              textAlign: "center",
              transition: "0.25s",
              fontSize: { size },
            }}
            hoverIndicator={fillColor}
            fill="vertical"
          />
        </Link>
      </Box>
    </Grommet>
  </Box>
)

export default PlainButton 