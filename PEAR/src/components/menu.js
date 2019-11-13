import React from 'react'
import Link from 'gatsby-link'
import { Box, Button, Heading } from 'grommet'


const Menu = () => 
(
        <Box
            justify = 'evenly'
            flex = {true}
            align = 'center'
            direction = 'row'
            pad = 'medium'
            background = {{
                color: 'light-1'
            }}
        >
            <Heading margin = 'none' size = 'small'>Azhar</Heading>
            <Link to = '/'><Button primary = {true} label = 'Home'></Button></Link>
            <Link to = '/about'><Button primary = {false} label = 'About'></Button></Link>
            <Link to = '/services'><Button primary = {false} label = 'Services'></Button></Link>
            <Link to = '/blog'><Button primary = {false} label = 'Blog'></Button></Link> 
        
        </Box>

)

export default Menu;
