import React, { Component } from 'react';
import {StaticQuery, Link} from 'gatsby';
import {graphql} from 'gatsby';

import SearchResults from './SearchResults';

export default class Header extends Component{
  render(){
  return(
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={(data) => (
      <header>
        <SearchResults current={this.props.current} is_recommend={this.props.is_recommend} query = {this.props.query} searchIndex={data.siteSearchIndex.index} />
      </header>
    )}
  />
  )
    }
    }

