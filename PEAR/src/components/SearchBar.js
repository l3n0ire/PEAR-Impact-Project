import React, { Component } from 'react'
import { TextInput, Box, Button, Grommet} from 'grommet'
import { Search, Close } from 'grommet-icons'
import { Index } from 'elasticlunr'
import { StaticQuery } from 'gatsby'

const SearchBar = () => (
  <StaticQuery
    query={graphql`
      query SearchBarQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
        <SearchBarComponent searchIndex={data.siteSearchIndex.index} />
    )}
  />
)

class SearchBarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      reveal: false
    }
  }
  _handleKeyDown = e => {
    if (e.key === "Enter") {
      window.location.href = '/search?q=' + e.target.value
    }
  }

  render() {
    return (
      <Grommet
        theme={{
          global: {
            input: {
              weight: '400'
            },
            colors: {
              placeholder: 'white'
            }
          },
          textInput: {
            suggestions: {
              extend: {
                backgroundColor: "black",
                dropShadow: 'none',
                color:'white'
              },
            },
          },
        }}
      >
        <Box
          className="searchBox"
          direction="row"
          align="center"
          margin={{ right: "medium" }}
          pad={{ horizontal: "small", vertical: "none" }}
          fill="horizontal"
          
        >
          <Search color="white" />
          <TextInput
            onKeyDown={e => this._handleKeyDown(e)}
            id="textinput"
            plain
            size="medium"
            focusIndicator={false}
            dropHeight="large"
            placeholder="Search..."
            size='small'
            onChange={e => {
              this.search(e)
              if (e.target.value !== "") {
                this.setState({ reveal: true })
              } else {
                this.setState({ reveal: false })
              }
            }}
            //Only truncate title if its over 25 characters...
            suggestions={this.state.results.map(post => {
              let title = post.title
              if (title.length > 25) {
                title = post.title.substring(0, 25) + "..."
              }
              return {
                label: title,
                path: post.slug,
              }
            })}
            onSelect={e => (window.location.href = e.suggestion.path)}
          />
          <Button
            focusIndicator={false}
            icon={
              this.state.reveal ? (
                <Close color="#999" />
              ) : (
                <Close color="none" />
              )
            }
            disabled={this.state.reveal ? false : true}
            onClick={e => {
              document.getElementById("textinput").value = ""
              this.setState({ reveal: false })
              this.search("")
            }}
          />
        </Box>
      </Grommet>
    )
  }

  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.searchIndex)

  search = evt => {
    this.index = this.getOrCreateIndex()
    let query
    if (typeof evt === "string") {
      query = evt
    } else {
      query = evt ? evt.target.value : ""
    }
    if (query !== "") {
      this.setState({
        query,
        results: this.index
          .search(query, { expand: true })
          .map(({ ref }) => this.index.documentStore.getDoc(ref)),
      })
    } else {
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

export default SearchBar