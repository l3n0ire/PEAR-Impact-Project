import React from 'react';
import Layout from '../components/layout';
import PlainButton from '../components/plainbutton';

import {Box, Heading, FormField, Form, TextArea, Button} from 'grommet';
import ReCAPTCHA from 'react-google-recaptcha';

function onChange(value) {
  console.log('Captcha value:', value);
}


const ContactPage = () => (
  <Layout>
    <Box pad="large">
      <Heading>Contact</Heading>
      <ReCAPTCHA
        sitekey="6LctE8MUAAAAAHBd7pFmtRxcmzDoSART6Q5BsanO"
        onChange={onChange}
      />
      <Form>
        <Box pad={{top: 'medium'}}>
          <FormField
            style={{width: '30vw'}}
            label="Name"
            name="name"
            required
            focusIndicator={false}
            validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            focusIndicator={false}
            style={{width: '30vw'}}
            placeholder="name@domain.com"
            label="Email"
            name="email"
            validate={{
              regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email.',
            }}
            required
          />
          <TextArea
            focusIndicator={false}
            component={TextArea}
            required
            name="message"
            resize={false}
            plain={false}
            style={{
              height: '30vh',
              width: '50vw'
            }}
            label="Message"
            placeholder="Type your message here."
          />
        </Box>
        <Box
          alignSelf="center"
          margin="small"
          overflow="hidden"
          width={{min: '80px', max: '150px'}}
          border={{side: 'all', color: 'black'}}
        >
          <Button
            alignSelf="center"
            plain={true}
            style={{
              padding: '10px',
              textAlign: 'center',
              transition: '0.35s',
              fontSize: '3vh',
            }}
            focusIndicator={false}
            hoverIndicator="black"
            fill={true}
            type="submit"
            label="Submit"
          />
        </Box>
      </Form>
    </Box>
  </Layout>
);

export default ContactPage;
