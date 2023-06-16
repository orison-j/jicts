import React from 'react'
import { Text } from '../components/elements/StyledTexts'
import Hero from '../components/hero_banner/Hero'
import { css } from 'styled-components'

import { Wrapper } from '../components/elements/StyledWrappers'
import ImageSrc from "../images/services/services.png"
import { Button } from '../components/elements/StyledButtons'
import { Container } from '../components/elements/StyledContainer'
import { Section } from '../components/elements/StyledSection'
import { NavLinks } from '../components/footer/NavLinks'
import Map from '../components/gMap/Map'
import Navigation from '../components/navbar/Navigation'

import { ServicesCTAImg, TrainingSectionBg, WebImage } from '../data/ServicesData'
import Footer from '../components/footer/Footer'


const Services = () => {
  return (
    <main style={{background:"none"}}>
        <Hero 
        p = '2rem 8rem'
        display='flex' 
        height='100vh'
        color='#eeeeee'
        css={css`
            position: relative;
            justify-content: center;
            align-items: center;
            background: rgba(255, 61, 0, 0.15);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center bottom;
        `}
        >
            <Navigation linkColor="rgb(25, 25, 55)" pos="absolute" color="#ff5a00" />
            <Wrapper p="0">
                <Text.xl> Services </Text.xl>
                <Text.sm> lorem ipsum </Text.sm>
                <Button orange round='5px' small css={css`margin:20px 10px`}>About Us</Button>
            </Wrapper>
            <Wrapper>
                <img src={ImageSrc} alt='services banner image' width={700} />
            </Wrapper>
            
        </Hero>
        <Section>
            <Container flex pd='50px 150px'>
                <Wrapper display="flex" fd="column" css={css`justify-content: center`}>
                    <Text.l>Website Design</Text.l>
                    <Text.sm fsize="1.2rem">Get a Custom Website that Reflects Your Brand Identity</Text.sm>
                    <div> <Button round='5px' small orange >View Projects</Button> <Button round='5px' small orange> Request a Quote</Button></div>
                </Wrapper>
                <Wrapper css={css`
                clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
                    `}>
                    <img src={ WebImage } height={400}  alt='Website Service Sample Image' />
                </Wrapper>
            </Container>

            <Container flex pd='50px 150px'>
                <Wrapper css={css`
                clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
                    `}>
                    <img src={ WebImage } height={400} />
                </Wrapper>

                <Wrapper display="flex" fd="column" css={css`justify-content: center`}>
                    <Text.l>Software Development</Text.l>
                    <Text.xsm fsize="1.2rem">Unlock the full potential of your business with out cutting edge software</Text.xsm>
                    <div> <Button round='5px' small orange >View Projects</Button> <Button round='5px' small orange> Request a Quote</Button></div>
                </Wrapper>
            </Container>
        </Section>

        <Container css={css`
        position: relative;
        padding: 100px 0;
        background-image: url(${ServicesCTAImg});
        background-size: cover;
        background-position:center center;
        background-repeat: no-repeat;
        
        `}>
            <Text.xl color='white' align='center'> Got a Project in Mind?</Text.xl>
            <Text.md color='#ff5a00' align='center'>We've got the tool for it</Text.md>          
        </Container>
        
        <Section bgcolor="rgba(205, 48, 64, 0.25)">
            <Container mg="0" bgcolor="transparent" flex pd='50px 150px'>
                <Wrapper display="flex" fd="column" css={css`justify-content: center`}>
                    <Text.l>Software Development</Text.l>
                    <Text.xsm fsize="1.2rem">Unlock the full potential of your business with out cutting edge software</Text.xsm>
                    <div> <Button round='5px' small orange >View Projects</Button> <Button round='5px' small orange> Request a Quote</Button></div>
                </Wrapper>
                <Wrapper css={css`
                clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
                    `}>
                    <img src={ WebImage } height={400} />
                </Wrapper>
            </Container>

            <Container mg="0" bgcolor="transparent" flex pd='50px 150px'>
                <Wrapper css={css`
                clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
                    `}>
                    <img src={ WebImage } height={400} />
                </Wrapper>

                <Wrapper display="flex" fd="column" css={css`justify-content: center`}>
                    <Text.l>Software Development</Text.l>
                    <Text.xsm fsize="1.2rem">Unlock the full potential of your business with out cutting edge software</Text.xsm>
                    <div> <Button round='5px' small orange >View Projects</Button> <Button round='5px' small orange> Request a Quote</Button></div>
                </Wrapper>
            </Container>
        </Section>

        <Section bgcolor="#480FE8">
            <Container mg="0" bgcolor="transparent" flex pd='50px 150px'>
                <Wrapper display="flex" fd="column" color='white' css={css`justify-content: center`}>
                    <Text.l>Software Development</Text.l>
                    <Text.xsm fsize="1.2rem">Unlock the full potential of your business with out cutting edge software</Text.xsm>
                    <div> <Button round='5px' small orange >View Projects</Button> <Button round='5px' small orange> Request a Quote</Button></div>
                </Wrapper>
                <Wrapper css={css`
                clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
                    `}>
                    <img src={ WebImage } height={400} />
                </Wrapper>
            </Container>

            <Container mg="0" bgcolor="transparent" flex pd='50px 150px'>
                <Wrapper css={css`
                clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
                    `}>
                    <img src={ WebImage } height={400} />
                </Wrapper>

                <Wrapper display="flex" fd="column" color='white' css={css`justify-content: center`}>
                    <Text.l>Software Development</Text.l>
                    <Text.xsm fsize="1.2rem">Unlock the full potential of your business with out cutting edge software</Text.xsm>
                    <div> <Button round='5px' small orange >View Projects</Button> <Button round='5px' small orange> Request a Quote</Button></div>
                </Wrapper>
            </Container>
        </Section>

        <Section height="100vh">
            <Container flex ai='center' jc='center' pd="10rem" mg="0"
            css={css`
            height: 100%;
            background-image: url(${TrainingSectionBg});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            background-color: rgba(25, 25, 55, 0.85);
            background-blend-mode: overlay;
            `}>
                <Wrapper display="flex" fd="column" ai="center" jc="center" color='white' css={css`text-align:center;`} >
                    <Text.xl>Training</Text.xl>
                    <Text.md>Let's Get you started on a Professional <span css={css`color:#ff5a00; font-size:2rem`}>PATH</span> with our hands on Trainings</Text.md>
                </Wrapper>
            </Container>
        </Section>

        <Section>
            <Map />
            <Footer type="copywrite" brand='Jehori ICT Services'>
            <NavLinks />
            </Footer>
        </Section>
    </main>
  )
}

export default Services
