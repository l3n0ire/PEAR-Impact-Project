import React from 'react';
import {StaticQuery, Link} from 'gatsby';
import {graphql} from 'gatsby';

import SearchResults from './SearchResults';

const Header = () => (
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
        <SearchResults searchIndex={data.siteSearchIndex.index} />
      </header>
    )}
  />
);

export default Header;
