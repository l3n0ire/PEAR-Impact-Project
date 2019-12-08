import React from 'react'
import Link from 'gatsby-link'
import { Component } from 'react'
import { TextInput, Box, Text, Button, Grommet } from 'grommet'
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
            width='30vw'
            height='5vh'
            direction="row"
            align="center"
            pad={{ horizontal: "small", vertical: "none" }}
            round="xsmall"
            border={{
              side: "all",
              color: "black",
            }}
            margin={{ left: "3vw", top: '3vh'}}
          >
            <Search color="black" />
            <TextInput
              focusIndicator={false}
              size='medium'
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
            <Link to={post.slug}>
              
                {" "}
                <Box
                  alignContent="start"
                  width="93vw"
                  pad="small"
                  pad={{left: 'small', right: 'small', top: 'small', bottom: '3vh'}}
                  margin={{left: '3vw', right:'3vw', top: '3vh', bottom: '2vh'}}
                  hoverIndicator={{ color: "light-2" }}
                  background={{ color: "light-1" }}
                  overflow='hidden'
                >
                
                  <Box direction="row">
                    <Text
                      size="3vh"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      <b>{post.title}</b>
                      &nbsp;
                      <span style={{ fontSize: "2.5vh" }}>
                        by {post.author}
                      </span>
                    </Text>
                  </Box>
                  <Text size='2vh'>{post.excerpt.replace(/^(\\)|\#.*/gm, "")}</Text>
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
