import React from 'react'
import Layout from "../components/layout"
import { Box, Heading, MaskedInput } from "grommet"
import ReCAPTCHA from 'react-google-recaptcha'

function onChange(value) {
    console.log("Captcha value:", value);
}


const ContactPage = () =>
(
        <Layout>
            <Box pad = 'large'>
                <Heading>Contact</Heading>
                <ReCAPTCHA
                    sitekey = "6LctE8MUAAAAAHBd7pFmtRxcmzDoSART6Q5BsanO"
                    onChange = {onChange}
                />
                <Box pad = {{'top':'medium'}}>
                    <MaskedInput
                        mask = {[
                            {
                                regexp: /^[\w\-_.]+$/,
                                placeholder: "example"
                            },
                            { fixed: "@" },
                            {
                                regexp: /^[\w]+$/,
                                placeholder: "domain"
                            },
                            { fixed: "." },
                            {
                                regexp: /^[\w]+$/,
                                placeholder: "com"
                            }
                        ]}
                    />
                </Box>
            
            </Box>
        </Layout>
)

export default ContactPage;