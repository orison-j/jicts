import * as React from "react"
import Hero from "../components/hero_banner/Hero"
import { Text } from "../components/elements/StyledTexts"
import { Button } from "../components/elements/StyledButtons"
import Navigation from '../components/navbar/Navigation';
import { Wrapper } from "../components/elements/StyledWrappers";
import { Section } from "../components/elements/StyledSection";
import { ImageCard } from "../components/elements/StyledCards";
import { css } from "styled-components";
import { Container } from "../components/elements/StyledContainer";
import { Testimonials } from "../components/testimonials/Testimonials"
import Footer from "../components/footer/Footer";
import { Subscription } from "../components/forms/Forms";
import Map from "../components/gMap/Map";
import { NavLinks } from "../components/footer/NavLinks";
import { CTAContainer } from '../components/elements/StyledCTAContainer'
import { RecentJobs } from "../components/recentJobs/RecentJobs";
import { getImage } from "gatsby-plugin-image";
import ImageSrc from '../images/home-hero.png'
import { useStaticQuery, graphql  } from 'gatsby'

const IndexPage = () => {
// console.log("bgm: ", BgImage)
  const testimonies = true
  return (
    <main>
      <Hero 
        p = '2rem 0'
        display='flex' 
        fd='column' 
        height='100vh'
        color='#eeeeee'
        css={css`
            position: relative;
            justify-content: center;
            align-items: center;
            background-image: url(${ImageSrc});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center bottom;
        `}
      >
        <Navigation pos="absolute" />
        <Text.l 
        width='70%'
        align='center'
        bold
        >Empowering Your Business to Succeed with  Tech-Driven Solutions</Text.l>
        <Button orange>About Us</Button>
      </Hero>

      { /* Services */}      
      <Section display="flex" css={css`justify-content:center; padding:20px;`}>
        <ImageCard cols={3}/>
      </Section>

      {/* Educational Package Section */}
      <Section display="flex" p="100px 0px" style={{justifyContent:'center', flexWrap:'nowrap'}}>
        <Wrapper p='5rem 5rem 5rem 10rem'>
          <Text.l bold='bolder' css={css`
            font-family: 'Poppins', 'lato', sans-serif;
            text-align: center;
          `}>Do More with EduPack</Text.l>
          <Text.sm  css={css`
            text-align: center;
            font-style: italic;
          `}>Level Up Your Schools/Institutes With Edupack</Text.sm>
          <Button small dark>Comming soon</Button>
        </Wrapper>
        <Wrapper>column two img</Wrapper>
      </Section>

      {/* Recent Jobs */}
      <Section display="flex" p='20px' style={{justifyContent:'center' }}>
        <Text.l>Lorem ipsum</Text.l>
        <RecentJobs />
        <Text.sm> Lorem ipsum </Text.sm>
      </Section>

      {/* Testimonials */}
      { testimonies && (
        <Section display="flex" p='40px 100px 140px 100px' style={{
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor: 'rgba(255, 255, 255)',
        borderRadius: '0 0 50% 50%'
      }}>
        <Wrapper p="20px 0 0 0" color="rgba(255, 61, 0, 0.8)">
          <Text.l align="center">Testimonials</Text.l>
          <Text.xsm italize align="center"> See What our clients are saying about our services.</Text.xsm>
        </Wrapper>
        
        <Container 
        style={{
          width:"100vw", 
          justifyContent:'center', 
          alignItems:'center', 
          background: 'transparent'
        }} 
        flex>
          <Testimonials />
        </Container>
        <div css={css`display: flex; flex-direction: column; align-items: center; color:rgba(255, 61, 0, 0.9)`}>
          <Text.sm italize>Your Satisfaction our Priority</Text.sm>
          <Button small>See More...</Button>
        </div>
        
      </Section>
      ) }

      <div css={css`
      position: absolute;
      width: 100vw;
      height: 1942.43px;
      left: 212.58px;
      top: 4708px;
      background-color: rgba(255, 61, 0, 0.25);
      border-radius: 0px 0px 720px 720px;
      transform: rotate(37.67deg);
      z-index: 1000;
      `}></div>

      {/* CTA */}
      <Section bgcolor="transparent" p="100px 0">
        <CTAContainer display='flex' fd='column' color="white">
          <Text.xsm>Build your Next Project with a Touch of Excellence and Professionalism</Text.xsm>
          <Text.xl style={{lineHeight: '80%', WebkitTextStroke: "3px"}} color="#FF3D00">IMAGINE IT,</Text.xl>
          <Text.l>Let's Build it</Text.l>
          <Button css={css`align-self:center; `}>Contact us now</Button>
        </CTAContainer>
      </Section>
      
      <Container flex jc='center' ai='center' pd='10px' mg='0 0 -30px 0'>
        <Subscription />
      </Container>

      <Section>
        <Map />
        <Footer type="copywrite" brand='Jehori ICT Services'>
          <NavLinks />
        </Footer>
      </Section>
    </main>
  )
}


export default IndexPage

export const Head = () => <title>Home Page</title>
//