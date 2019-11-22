import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import { Component, Fragment, useState } from 'react'
import { TextInput, Box} from 'grommet'
import { Search } from 'grommet-icons'
import { Index } from 'elasticlunr'

export default class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ``,
            results: [],
        }
    }

    render() {
    return (
      <>
        <Box
          width="large"
          direction="row"
          align="center"
          pad={{ horizontal: "small", vertical: "none" }}
          round="xsmall"
          border={{
            side: "all",
            color: "black",
          }}
          margin={{ left: "3vw" }}
        >
          <Search color="black" />
          <TextInput value={this.state.query} onChange={this.search} placeholder="Search for tags or titles" plain />
        </Box>
      </>
    )
    }
    getOrCreateIndex = () =>
    this.index
        ? this.index
        : Index.load(this.props.searchIndex)

    search = evt => {
        const query = evt.target.value
        this.index = this.getOrCreateIndex()
        this.setState({
            query,
            results: this.index
            .search(query, { expand: true }) 
            .map(({ ref }) => this.index.documentStore.getDoc(ref)),
        })
    }
}

/*const Component = (queriedData) => {

    return (
        <>
            <Box
            width="large"
            direction="row"
            align="center"
            pad={{ horizontal: "small", vertical: "none" }}
            round="xsmall"
            border={{
                side: "all",
                color: "black",
            }}
            margin={{ left: "3vw" }}
            >
            <Search color="black" />
            <TextInput placeholder="Search for tags or titles" plain />
            </Box>
        </>
    )
}*/
