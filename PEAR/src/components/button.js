import PropTypes from "prop-types"
import React from "react"
const Button = ({ buttonText}) => (
    <button
    style = {{
        background: 'blue',
        color:'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto'

        
    }}
    > {buttonText}</button>
)
export default Button