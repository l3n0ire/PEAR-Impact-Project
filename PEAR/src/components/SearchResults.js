import React from 'react'
import Link from 'gatsby-link'
import { Component } from 'react'
import { TextInput, Box, Grid, Text, Heading, Image} from 'grommet'
import { Search } from 'grommet-icons'
import { Index } from 'elasticlunr'
import PlainButton from './plainbutton'

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ``,
            results: [],
        }
    }

    render() {
        return (
          <React.Fragment>
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
              <TextInput
                value={this.state.query}
                onChange={this.search}
                placeholder="Search for tags or titles"
                plain
              />
            </Box>
            <Grid
              alignSelf="center"
              columns={["45vw", "45vw"]}
              rows="flex"
              alignContent="center"
              gap="large"
              margin="3vw"
            >
              {this.state.results.map(post => (
                <Link to={post.path}>
                  <Box
                    justify="center"
                    height="55vh"
                    background={{ color: "light-1" }}
                  >
                    <Heading
                      style={{ margin: "10px" }}
                      alignSelf="center"
                      level="3"
                      margin="medium"
                    >
                      {post.title}
                    </Heading>
                    <Text alignSelf="center">Posted by {post.author} on</Text>

                    <PlainButton text="Read More" target={post.path} />
                  </Box>
                </Link>
              ))}
            </Grid>
          </React.Fragment>
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
