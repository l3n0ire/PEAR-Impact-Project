import React from 'react';
import Layout from '../components/layout.jsx';
import PlainButton from '../components/plainButton.jsx';

import {Box, Heading, FormField, Form, TextArea, Button, grommet, Grommet} from 'grommet';
import ReCAPTCHA from 'react-google-recaptcha';
import {Desktop, Mobile, Tablet} from '../components/menu.jsx';

function onChange(value) {
  console.log('Captcha value:', value);
}

const customFormFieldTheme = {
  global:{
    colors:{
      focus:"#333"
    }
  },
  formField: {
    label: {
      margin: { vertical: "0", bottom: "small", horizontal: "0" },
      weight: 600
    },
    border:{
      color:"#333"
    }
  }
};


const ContactPage = () => (
  <Layout>
    <Grommet theme = {customFormFieldTheme}>
      <Desktop>
    <Box pad={{vertical:"large"}} margin={{horizontal:"8vw"}} align="center">
      <div style={{width:"45vw"}}>
      <Heading>Contact</Heading>
      <Form>
        <Box pad={{top: 'medium'}}>
          <FormField
            style={{minWidth:'270px' }}
            label="Name"
            name="name"
            required
            focusIndicator={false}
            validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            focusIndicator={false}
            style={{ minWidth:'270px'}}
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
              height: '35vh',
              minWidth:'270px',
            }}
            label="Message"
            placeholder="Type your message here."
          />
          
        </Box>
                
        <ReCAPTCHA
        style={{margin:"3vh 0vh",width:'100px'}}
        sitekey="6LctE8MUAAAAAHBd7pFmtRxcmzDoSART6Q5BsanO"
        onChange={onChange}
      />
      <PlainButton text="Submit" target="/contact" boxMargin="0" />

      </Form>
      </div>
    </Box>
    </Desktop>

    <Tablet>
    <Box pad={{vertical:"large"}} margin={{horizontal:"8vw"}} align="center">
      <div style={{width:"45vw"}}>
      <Heading>Contact</Heading>
      <Form>
        <Box pad={{top: 'medium'}}>
          <FormField
            style={{minWidth:'270px' }}
            label="Name"
            name="name"
            required
            focusIndicator={false}
            validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            focusIndicator={false}
            style={{width: '50vw', minWidth:'270px'}}
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
              height: '35vh',
              width: '50vw',
              minWidth:'270px',
            }}
            label="Message"
            placeholder="Type your message here."
          />
          
        </Box>
                
        <ReCAPTCHA
        style={{margin:"3vh 0vh",width:'100px'}}
        sitekey="6LctE8MUAAAAAHBd7pFmtRxcmzDoSART6Q5BsanO"
        onChange={onChange}
      />
      <PlainButton text="Submit" target="/contact" boxMargin="0" />

      </Form>
      </div>
    </Box>
    </Tablet>

    <Mobile>
    <Box pad={{vertical:"large"}} margin={{horizontal:"8vw"}}>
      <Heading>Contact</Heading>
      <Form>
        <Box pad={{top: 'medium'}}>
          <FormField
            style={{minWidth:'270px' }}
            label="Name"
            name="name"
            required
            focusIndicator={false}
            validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            focusIndicator={false}
            style={{minWidth:'270px'}}
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
              height: '35vh',
              minWidth:'270px',
            }}
            label="Message"
            placeholder="Type your message here."
          />
          
        </Box>
                
        <ReCAPTCHA
        style={{margin:"3vh 0vh",width:'100px'}}
        sitekey="6LctE8MUAAAAAHBd7pFmtRxcmzDoSART6Q5BsanO"
        onChange={onChange}
      />
      <PlainButton text="Submit" target="/contact" boxMargin="0" />

      </Form>
    </Box>
    </Mobile>

    </Grommet>
  </Layout>
);

export default ContactPage;
