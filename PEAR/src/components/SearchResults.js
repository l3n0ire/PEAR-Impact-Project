import React from 'react'
import Link from 'gatsby-link'
import { Component } from 'react'
import { TextInput, Box, Grid, Text, Heading, Button} from 'grommet'
import { Search, Close } from 'grommet-icons'
import { Index } from 'elasticlunr'
import PlainButton from './plainbutton'

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ``,
            results: [],
            reveal: false,
        }

    }
    componentDidMount() {
        this.search()
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
            id="textinput"
            value={this.state.query}
            onChange={e => {
              this.setState({ reveal: true })
              this.search(e)
            }}
            placeholder="Search for tags or titles"
            plain
          />
          <Button
            icon={
              this.state.reveal ? (
                <Close color="#999" />
              ) : (
                <Close color="white" />
              )
            }
            disabled={this.state.reveal ? false : true}
            onClick={e => {
              document.getElementById("textinput").value = ''
              this.search('')
            }}
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
    )}
    getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.searchIndex)
    
    search = evt => {
        this.index = this.getOrCreateIndex()
        const query = evt ? evt.target.value : ''
        if(query !== '') {
            this.setState({
                query,
                results: this.index
                .search(query, { expand: true })
                .map(({ ref }) => this.index.documentStore.getDoc(ref)),
            })
        } else {
        console.log(query)
        var res = []
        for (var ref in this.index.documentStore.docInfo) {
            res.push(this.index.documentStore.getDoc(ref))
        }
        this.setState({
            query,
            results: res,
        })
        }
    }
}
