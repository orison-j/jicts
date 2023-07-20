import React from 'react'
import styled, { css } from 'styled-components'


import Hero from '../components/hero_banner/Hero'
import Navigation from '../components/navbar/Navigation'
import { Text } from '../components/elements/StyledTexts'
import { Button } from '../components/elements/StyledButtons'
import ImageSrc from '../images/blog-hero.jpg'
import { Container } from '../components/elements/StyledContainer'
import { Section } from '../components/elements/StyledSection'
import { Wrapper } from '../components/elements/StyledWrappers'

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
        <Wrapper color='white' style={{width:'70vw'}}>
           
              <Text.l 
                  width='70%'
                  bold >
                      Let's Get you informed on our Services
              </Text.l>
              <Text.sm>Get the right knowledge of what we do so you look before you leap</Text.sm>
              
          <Box css={css`padding: 1rem 0`}>
            <Button to="/company/about-us" orange round="5px" css={`margin:0;`}>About Us</Button>
          </Box>
        </Wrapper>
      </Hero>
      <Section>
        <Container mg="0" pd="0" >

        </Container>
      </Section>
    </main>
  )
}

export default BlogPage


const Box = styled.div`
${({display}) => display === 'flex' && css`
    display: flex;
    gap: .1rem;
    align-items: center;
`}
${({type}) => type === 'basic' && `
    border-radius: ${props => props.corners || '65px' };
    background: #FFF;
`}
border-radius: ${props => props.corners || '65px' };
` 