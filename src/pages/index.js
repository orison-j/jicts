import * as React from "react"
import Hero from "../components/hero_banner/Hero"
import { Text } from "../components/elements/StyledTexts"
import { Button } from "../components/elements/StyledButtons"
import Navigation from '../components/navbar/Navigation';
import { Section } from "../components/elements/StyledWrappers";
import { ImageCard } from "../components/elements/StyledCards";
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from "styled-components";

const IndexPage = () => {
  return (
    <main>
      <Hero 
        p = '2rem 0'
        display='flex' 
        fd='column' 
        height='100vh'
        color='#eeeeee'
      >
        <Navigation pos="absolute" />
        <Text.l 
        width='70%'
        align='center'
        bold
        >Empowering Your Business to Succeed with  Tech-Driven Solutions</Text.l>
        <Button>About Us</Button>
      </Hero>
      <Section display="flex" style={{justifyContent:'center', padding:'20px'}}>
        <ImageCard cols={3} items={6}>
          <GatsbyImage alt=""/>
          <Text.md>heading</Text.md>
          <Text.sm fsize='1.2rem' align='center'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. 
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, 
            ultrices mauris</Text.sm>
          <div css={css`
              display: flex;
              gap: 10px;
          `}>
              <Button link small to='/projects'>View Projects</Button>
              <Button link dark small to="/quote">Get Quote</Button>
          </div>
        </ImageCard>
      </Section>
    </main>
  )
}


export default IndexPage

export const Head = () => <title>Home Page</title>
