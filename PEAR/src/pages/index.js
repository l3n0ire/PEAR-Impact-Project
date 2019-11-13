import React from 'react'
import Layout from '../components/layout'
import { Box, Carousel, Image } from 'grommet'

const Index = () => {
  return (
    <div>
      <Layout>
      <Box height = '75vh' width = '100vw' overflow = 'hidden' border = 'top'>
        <Carousel fill play = '7000'>
          <Image fit="cover" src="https://stadelmanfruit.com/wp-content/uploads/2017/06/pear-rotate-still-1400x788.jpg"/>
          <Image fit="cover" src="https://azharlaher.com/wp-content/uploads/2019/10/img-3298_orig-1024x576.jpg" />
          <Image fit="cover" src="https://boundless.utoronto.ca/wp-content/uploads/Krembil-UTSC-gift_story-13.jpg" />
        </Carousel>
      </Box>


      </Layout>
    </div>
  )
}
export default Index
