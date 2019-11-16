import React from 'react'
import { Button, Box, Grommet } from 'grommet'
import Link from 'gatsby-link'
import globalTheme from './style'

const PlainButton = ({text, target}) => (
    <Grommet theme={globalTheme}>
        <Box 
            alignSelf ='center' 
            margin = 'small'
            overflow = 'hidden'
            border = {{'side': 'all', 'color': 'black'}}
        >
            <Link to = {target}>
                <Button 
                    alignSelf = 'center'
                    label = {text}
                    plain = {true}
                    style = {{
                        padding: '10px', 
                        width: '7vw', 
                        textAlign: 'center'
                    }} 
                    hoverIndicator = 'black' 
                    fill = {true}
                />
            </Link>
        </Box>
    </Grommet>
)

export default PlainButton 