import React from 'react'
import Link from 'gatsby-link'
import { Component } from 'react'
import { TextInput, Box, Text, Button, Image } from 'grommet'
import { Search, Close } from 'grommet-icons'
import { Index } from 'elasticlunr'
const qs = require('query-string')



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
      const query = qs.parse(window.location.search).q
      if(typeof query !== 'undefined') {
        this.search(query)
      }
      else {
        this.search()
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
              focusIndicator={false}  
              id="textinput"
              value={this.state.query}
              onChange={e => {
                if (e.target.value !== "") {
                  this.setState({ reveal: true })
                } else {
                  this.setState({ reveal: false })
                }
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
                  <Close color="none" />
                )
              }
              focusIndicator={false}
              disabled={this.state.reveal ? false : true}
              onClick={e => {
                document.getElementById("textinput").value = ""
                this.setState({ reveal: false })
                this.search("")
              }}
            />
          </Box>
          {this.state.results.map(post => (
            <Link to={post.path}>
              <Box
                alignContent="start"
                width="93vw"
                pad="small"
                margin="3vw"
                height="18vh"
                background={{ color: "light-1" }}
              >
                {console.log(post)}
                <Box direction="row">
                  <Text
                    size="2.5vw"
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <b>{post.title}</b>
                    &nbsp;
                    <span style={{ fontSize: "1.5vw" }}>by {post.author}</span>
                  </Text>
                </Box>
                <Text>{post.excerpt.replace(/^(\\)|\#.*/gm, "")}</Text>
              </Box>
            </Link>
          ))}
        </React.Fragment>
      )
    }
    getOrCreateIndex = () => 
      this.index ? this.index : Index.load(this.props.searchIndex)
    
    search = evt => {
        this.index = this.getOrCreateIndex()
        let query
        if(typeof evt === 'string') {
          query = evt
        }
        else {
          query = evt ? evt.target.value : ''
        }
        
        if(query !== '') {
            this.setState({
                query,
                results: this.index
                .search(query, { expand: true })
                .map(({ ref }) => (
                    this.index.documentStore.getDoc(ref)
                )),
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
