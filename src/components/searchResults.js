import React from 'react'
import Link from 'gatsby-link'
import { Component } from 'react'
import { TextInput, Box, Text, Button, Grommet,Image,Heading,Grid } from 'grommet'
import { Search, Close } from 'grommet-icons'
import { Index } from 'elasticlunr'
import Tag from './tag'
import {Desktop, Mobile, Tablet} from './menu'
const qs = require('query-string')
var dateFormat = require('dateformat')







export default class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ``,
            results: [],
            reveal: false,
            images:{},
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
            margin={this.props.is_recommend? {vertical:"medium"}:{horizontal:"8vw",vertical:"medium" }}
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
          {
                        

            this.props.images.map(post =>{
              this.state.images[post.node.frontmatter.title] = post.node.frontmatter.featuredImage.childImageSharp.fluid.src

            }
            )

        }
        <Desktop>
        <Grid
            alignSelf="center"
            columns={this.props.is_recommend? ["flex","flex"]: ["flex", "flex","flex"]}
            rows="flex"
            alignContent="center"
            gap="small"
            align='stretch'
            margin={this.props.is_recommend? 0:{vertical:"3vw", horizontal:'8vw'}}

            

          >
          

          {this.state.results.filter(function (post1){
            if (post1.title == current){
              return false; // filter out the current post from recommended
            }
              return true;
          }).map(post => (
            <Link to={post.slug}>
                <Box justify="center" height="27vw" border={{color: '#d3d3d3', opacity: '100'}}
                 style={{backgroundColor:"white"}}  >
                   <Image
                style={{ margin: "0px" }}
                fit="cover"
                src={this.state.images[post.title]}
              />

                    <Heading
                      margin={{top:"xsmall", right:"medium", left:"medium", bottom:"xsmall"}}
                      level="3"
                    >
                      {post.title}
                    </Heading>
                    <Text size="medium" margin={{horizontal:"medium", bottom:"small"}}>
                    By: {post.author}<br/>
                    {dateFormat(new Date(post.date),"mmmm d, yyyy")}
                    </Text>

                    <Box margin={{'left':"medium"}} pad={{"bottom":"0"}}>
                      <Tag tags={post.tags}></Tag>
                    </Box>


                </Box>
              </Link>
          ))}
          </Grid>
          </Desktop>
<Tablet>
          {this.state.results.filter(function (post1){
            if (post1.title == current){
              return false; // filter out the current post from recommended
            }
              return true;
          }).map(post => (
            <Link to={post.slug}>
            <Box justify="center" margin={this.props.is_recommend?{vertical:"5vh"}:
            {horizontal:"20vw",vertical:"5vh"}} 
            height="50vw"
            style={{backgroundColor:"white"}} border={{color: '#d3d3d3', opacity: '100'}}
            pad={{bottom:'xsmall'}}
            
            >
              <Image
                style={{ margin: "0px" }}
                fit="cover"
                src={
                  this.state.images[post.title]
                }
              />
              <Heading level="2" margin={{top:"small", right:"3vw", left:"3vw", bottom:"small"}}>
                
                {post.title}
              </Heading>
              <Text margin={{horizontal:"3vw", bottom:'small'}}>
                By: {post.author}<br/>
                {dateFormat(new Date(post.date),"mmmm d, yyyy")}
              </Text>

              <Box margin={{'left':"3vw"}}>
                <Tag tags={post.tags}></Tag>
              </Box>

            </Box>
          </Link>
          ))}
          
          </Tablet>
          <Mobile>
          {this.state.results.filter(function (post1){
            if (post1.title == current){
              return false; // filter out the current post from recommended
            }
              return true;
          }).map(post => (
          <Link to={post.slug}>
            <Box justify="center" margin={this.props.is_recommend?{vertical:"large"}:
            {vertical:"large", horizontal:'8vw'}}
                 height="medium"
                 pad={{bottom:'medium'}}
                 style={{backgroundColor:"white"}}
                 border={{color: '#d3d3d3', opacity: '100'}} >
              <Image
                style={{ margin: "0px" }}
                fit="cover"
                src={
                  this.state.images[post.title]
                }
              />
              <Heading  level="2" margin={{top:"medium", right:"medium", left:"medium", bottom:"0"}}>
                
                {post.title}
              </Heading>
              <Text margin='small'>
                {" "}
                
                By: {post.author} <br/>
                {dateFormat(new Date(post.date),"mmmm d, yyyy")}
              </Text>

              <Box margin={{'left':"3vw"}}>
                <Tag tags={post.tags}></Tag>
              </Box>

            </Box>
          </Link>
          ))}

          </Mobile>
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
