import React from "react"
import { StaticQuery, Link } from "gatsby"
import { graphql } from "gatsby"

import SearchComponent from "./SearchComponent"

const Header = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <header>
        <SearchComponent searchIndex={data.siteSearchIndex.index} />
      </header>
    )}
  />
)

export default Header
