import React, { Component } from 'react';
import {StaticQuery, Link} from 'gatsby';
import {graphql} from 'gatsby';

import SearchResults from './searchResults';

export default class Header extends Component{
  render(){
  return(
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
        allMarkdownRemark{
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                clientName
                author
                tags
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <header>
        <SearchResults current={this.props.current} is_recommend={this.props.is_recommend} query = {this.props.query} 
        searchIndex={data.siteSearchIndex.index}
        images ={data.allMarkdownRemark.edges} />
      </header>
    )}
  />
  )
    }
    }

