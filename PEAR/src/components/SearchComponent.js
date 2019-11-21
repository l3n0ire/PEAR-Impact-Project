import React from 'react'
import { Fragment } from 'react'
import { TextInput, Box} from 'grommet'
import { Search } from 'grommet-icons'


const SearchComponent = () => (
    <Fragment>
        <Box 
            width="large"
            direction="row"
            align="center"
            pad={{ horizontal: "small", vertical: "none" }}
            round="xsmall"
            border={{
                side: "all",
                color: 'black'
            }}
            margin={{left: "3vw"}}>
        <Search color='black'/>
        <TextInput
        placeholder = "Search for tags or titles"
        plain
        />
        </Box>
    </Fragment>
)

export default SearchComponent 