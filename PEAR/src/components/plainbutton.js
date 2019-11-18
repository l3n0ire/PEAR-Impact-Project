import React from 'react'
import { Button, Box, Grommet } from 'grommet'
import Link from 'gatsby-link'
import globalTheme from './style'

const PlainButton = ({text, target}) => (
    <Box alignSelf = 'center'>
        <Grommet theme = {globalTheme}>
            <Box 
                alignSelf = 'center' 
                margin = 'small'
                overflow = 'hidden'
                width = {{"min": "80px", "max": "150px"}}
                border = {{'side': 'all', 'color': 'black'}}
            >
                <Link to = {target}>
                    <Button 
                        alignSelf = 'center'
                        label = {text}
                        plain = {true}
                        style = {{
                            padding: '10px', 
                            textAlign: 'center',
                            transition: '0.3s'
                        }} 
                        hoverIndicator = 'black' 
                        fill = {true}
                    />
                </Link>
            </Box>
        </Grommet>
    </Box>
)

export default PlainButton 