import React from 'react'
import { TextInput, Box, Button } from 'grommet'
import { Search, Close } from 'grommet-icons'

const SearchBar = () => (
  <Box
    direction="row"
    align="center"
    margin={{right:'medium'}}
    pad={{ horizontal: 'small', vertical: "none" }}
    round="xsmall"
    fill="horizontal"
    border={{
      side: "all",
      color: "black",
    }}
  >
    <Search color="black" />
    <TextInput id="textinput" size="medium" placeholder="Search..." plain />
    <Button
      icon={<Close color="#999" />}
      onClick={e => {
        document.getElementById("textinput").value = ""
        this.search("")
      }}
    />
  </Box>
)

export default SearchBar