import React from 'react'
import Link from 'gatsby-link'
import { Component } from 'react'
import { TextInput, Box, Text, Button, Grommet } from 'grommet'
import { Search, Close } from 'grommet-icons'
import { Index } from 'elasticlunr'
const qs = require('query-string')
import { useMediaQuery } from "react-responsive"





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
      if(this.props.query !=null){
        this.search(this.props.query)

      }
      else if(typeof query !== 'undefined') {
        this.search(query)
      }
      else {
        this.search()
      }
    }

    render() {
      const Recommend = ({ children }) => {
        return this.props.is_recommend ? null:children
        
      } // find a better way to do this

      const current = this.props.current
      return (

        <React.Fragment>

          <Box
            width="17em"
            height='5vh'
            direction="row"
            align="center"
            pad={{ horizontal: "small", vertical: "none" }}
            margin={{vertical:"medium"}}
            round="xsmall"
            border={{
              side: "all",
              color: "black",
            }}
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
              style={{padding:"0"}}
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

          {this.state.results.filter(function (post1){
            if (post1.title == current){
              return false; // filter out the current post from recommended
            }
              return true;
          }).map(post => (
            <Link to={post.slug}>
              
                {" "}
                <Box
                  alignContent="start"
                  width="84vw"
                  pad="small"
                  pad={{right: 'small', top: 'small', bottom: 'small'}}
                  hoverIndicator={{ color: "light-2" }}
                  background={{ color: "light-1" }}
                  overflow='hidden'
                >
                
                    <Text
                      size="large"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      <b>{post.title}</b>
                    </Text>
                    <Text size='medium'>
                    by {post.author} on {post.date}
                    </Text>
                  <Text size='medium' margin={{vertical:"small"}}>{post.excerpt.replace(/^(\\)|\#.*/gm, "")}</Text>
                  <hr/>
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
