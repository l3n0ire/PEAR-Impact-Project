import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
    <Header siteTitle = "lololoo"/>
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
    <Link to="/"><button class="primary-button" >Click me</button></Link>

  </div>
)