import React from 'react';
import Layout from '../components/layout';
import {Box, Heading, Image, Paragraph} from 'grommet';

const AboutPage = () => (
  <Layout>
    <Box pad="large">
      <Box
      height="small"
      margin="medium"
      >
      <Image
      src="../images/azhar.jpg"
      margin='0'
      fit="contain"
      fill/>
      </Box>

      
      <Heading>About Azhar</Heading>
      
        
          <p>
            <b>Azhar Laher.</b> A father and husband, social entrepreneur,
            sports nut, teacher and business coach. He is deeply concerned about
            social justice issues. He has worked in the Human Resources industry
            for over 25 years and held senior human resources positions in both
            South Africa and Canada, focusing on strategic planning, total
            rewards, employee relations and diversity. He is currently Professor
            of Human Resources in the School of Leadership and Human Resources
            at Seneca College in Toronto.
            
          </p>
    </Box>
  </Layout>
)

export default AboutPage;
