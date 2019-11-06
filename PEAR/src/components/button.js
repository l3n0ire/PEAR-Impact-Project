import PropTypes from "prop-types"
import React from "react"

const Button = ({ buttonText}) => (
    <button
    style = {{
        background: '#333',
        color:'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto',
        padding: '0.5%'
    }}
    > {buttonText}</button>
)
export default Button