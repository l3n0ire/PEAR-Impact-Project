import React from 'react'
import { Button, Box } from 'grommet'
import Link from 'gatsby-link'

const PlainButton = ({text, target}) => (
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
)

export default PlainButton 