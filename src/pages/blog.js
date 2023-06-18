import React from 'react'
import styled, { css } from 'styled-components'


import Hero from '../components/hero_banner/Hero'
import Navigation from '../components/navbar/Navigation'
import { Text } from '../components/elements/StyledTexts'
import { Button } from '../components/elements/StyledButtons'
import ImageSrc from '../images/blog-hero.jpg'

const BlogPage = () => {
  return (
    <main>
      <Hero 
        p = '2rem 4rem'
        display='flex' 
        fd='column' 
        height='100vh'
        color='#eeeeee'
        css={css`
            position: relative;
            justify-content: center;
            align-items: left;
            background-image: url(${ImageSrc});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center top;
        `}
      >
        <Navigation pos="absolute" linkColor="white" subLinkColor="#111"/>
        <div style={{width:'80vw'}}>
            <Text.l 
                width='70%'
                bold >
                    Let's Get you informed on our Services
            </Text.l>
            <Text.xsm>Get the right knowledge of what we do so you look before you leap</Text.xsm>
            <Button small orange round="5px">About Us</Button>
        </div>
        
      </Hero>
    </main>
  )
}

export default BlogPage
